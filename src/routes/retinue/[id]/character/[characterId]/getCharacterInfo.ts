import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '$lib/firestore';
import { characters } from '$lib/data/characters';

interface MemberData {
	id: string;
	roles: string[];
	abilities: string[];
}

export function getCharacterInfo(
	retinueId: string,
	characterId: string,
	callback: (member: { name: string; roles: string[]; abilities: string[] }) => void
) {
	onSnapshot(doc(firestore, 'retinues', retinueId, 'members', characterId), (snapshot) => {
		const character = characters.find((c) => c.id === characterId);
		if (!character) {
			return;
		}
		const data = snapshot.data() as MemberData;
		if (data) {
			callback({
				roles: data.roles,
				name: character?.name,
				abilities: data.abilities
			});
		}
	});
}
