import { app } from '$lib/firebase';
import { browser } from '$app/environment';
import {
	getFirestore,
	connectFirestoreEmulator,
	collection,
	addDoc,
	getDoc,
	getDocs,
	updateDoc,
	doc,
	Firestore,
	deleteDoc,
	where,
	query
} from 'firebase/firestore';
import { auth } from '$lib/auth';

export let firestore: Firestore;

if (browser) {
	firestore = getFirestore(app);
	if (window.location.hostname === 'localhost') {
		connectFirestoreEmulator(firestore, 'localhost', 8080);
	}
}

export async function createNewRetinue(name: string) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const docRef = await addDoc(collection(firestore, 'retinues'), {
		owner: auth.currentUser.uid,
		name,
		members: {}
	});
	return docRef.id;
}

export async function listRetinues() {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const q = query(collection(firestore, 'retinues'), where('owner', '==', auth.currentUser.uid));
	const querySnapshot = await getDocs(q);
	const retinues = querySnapshot.docs.map((doc) => {
		return { id: doc.id, name: doc.data().name };
	});
	return retinues;
}

export async function getRetinue(retinueId: string) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const docSnap = await getDoc(doc(firestore, 'retinues', retinueId));
	if (docSnap.exists()) {
		return docSnap.data();
	}
	return null;
}
export interface MemberData {
	id: string;
	roles: string[];
	abilities: string[];
}
export async function getRetinueMembers(retinueId: string): Promise<MemberData[]> {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const q = query(collection(firestore, 'retinues', retinueId, 'members'));
	const querySnapshot = await getDocs(q);
	const members = querySnapshot.docs.map((doc) => {
		return { id: doc.id, ...doc.data() } as MemberData;
	});
	return members;
}

export async function removeMemberFromRetinue(retinueId: string, memberId: string) {
	const docRef = doc(firestore, 'retinues', retinueId, 'members', memberId);
	await deleteDoc(docRef);
}

export async function updateMember(
	retinueId: string,
	character: { characterId: string; roles: string[]; abilities: string[] }
) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const memberRef = doc(firestore, 'retinues', retinueId, 'members', character.characterId);
	const retinueSnap = await getDoc(memberRef);
	if (retinueSnap.exists()) {
		const member = retinueSnap.data();
		await updateDoc(memberRef, {
			roles: character.roles || member.roles,
			abilities: character.abilities || member.abilities
		});
	}
}
