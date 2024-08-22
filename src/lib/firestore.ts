import { firestore } from './firebase';
import { collection, addDoc, getDoc, setDoc, updateDoc, doc } from 'firebase/firestore';
import { auth } from './firebase';

export async function createNewRetinue(name: string) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const docRef = await addDoc(collection(firestore, 'users', auth.currentUser.uid, 'retinues'), {
		name,
		members: {}
	});
	return docRef.id;
}

export async function getRetinue(retinueId: string) {
	if (!auth.currentUser) {
		throw new Error('User not logged in');
	}
	const docSnap = await getDoc(
		doc(firestore, 'users', auth.currentUser.uid, 'retinues', retinueId)
	);
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
	const retinueRef = doc(firestore, 'users', auth.currentUser.uid, 'retinues', retinueId);
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
	const retinueRef = doc(firestore, 'users', auth.currentUser.uid, 'retinues', retinueId);
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
