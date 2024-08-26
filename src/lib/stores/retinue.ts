import { browser } from '$app/environment';
import { firestore } from '$lib/firestore';
import { doc, onSnapshot } from 'firebase/firestore';
import { writable } from 'svelte/store';

export interface Member {
	id: string;
	roles: string[];
	abilities: string[];
}

export interface Retinue {
	name: string;
	members: { [key: string]: Member };
}

export default function retinueStore(retinueId: string) {
	const { subscribe } = writable<Retinue>(undefined, (set) => {
		if (browser) {
			onSnapshot(doc(firestore, 'retinues', retinueId), (snapshot) => {
				const data = snapshot.data() as Retinue;
				if (data) {
					set(data);
				}
			});
		}
	});

	return {
		subscribe
	};
}
