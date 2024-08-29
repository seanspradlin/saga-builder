// import { firestore } from './firebase';
import { app } from '$lib/firebase';
import { browser } from '$app/environment';
import {
	getFirestore,
	connectFirestoreEmulator,
	collection,
	addDoc,
	getDoc,
	setDoc,
	updateDoc,
	doc,
	Firestore
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

export async function addMemberToRetinue(
	retinueId: string,
	character: { characterId: string; roles: string[]; abilities: string[] }
) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const retinueRef = doc(firestore, 'retinues', retinueId);
	const retinueSnap = await getDoc(retinueRef);
	if (retinueSnap.exists()) {
		const retinue = retinueSnap.data();
		if (!retinue.members[character.characterId]) {
			retinue.members[character.characterId] = {
				id: character.characterId,
				roles: character.roles || [],
				abilities: character.abilities || []
			};
			await setDoc(retinueRef, retinue);
		}
	}
}

export async function updateMember(
	retinueId: string,
	character: { characterId: string; roles: string[]; abilities: string[] }
) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const retinueRef = doc(firestore, 'retinues', retinueId);
	const retinueSnap = await getDoc(retinueRef);
	if (retinueSnap.exists()) {
		const retinue = retinueSnap.data();
		if (retinue.members[character.characterId]) {
			await updateDoc(retinueRef, {
				members: {
					...retinue.members,
					[character.characterId]: {
						id: character.characterId,
						roles: character.roles,
						abilities: character.abilities
					}
				}
			});
		}
	}
}
