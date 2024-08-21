import { firestore } from './firebase';
import { collection, addDoc, getDoc, setDoc, updateDoc, doc } from 'firebase/firestore';

export async function createNewRetinue(name: string) {
	const docRef = await addDoc(collection(firestore, 'retinues'), {
		name,
		members: {}
	});
	return docRef.id;
}

export async function getRetinue(id: string) {
	const docSnap = await getDoc(doc(firestore, 'retinues', id));
	if (docSnap.exists()) {
		return docSnap.data();
	}
	return null;
}

export async function addMemberToRetinue(
	retinueId: string,
	character: { characterId: string; roles: string[]; abilities: string[] }
) {
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
