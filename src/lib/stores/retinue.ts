import { browser } from '$app/environment';
import { firestore } from '$lib/firestore';
import { doc, onSnapshot } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { Member } from '../member';

export interface MemberData {
	id: string;
	roles: string[];
	abilities: string[];
}

export interface RetinueData {
	id: string;
	name: string;
	owner: string;
}

export default function retinueStore(retinueId: string) {
	const { subscribe } = writable<RetinueData>(undefined, (set) => {
		if (browser) {
			onSnapshot(doc(firestore, 'retinues', retinueId), (snapshot) => {
				const data = snapshot.data() as RetinueData;
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
