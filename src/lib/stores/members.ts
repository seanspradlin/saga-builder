import { readable } from 'svelte/store';
import { collection, query, onSnapshot } from 'firebase/firestore';

import { browser } from '$app/environment';
import { firestore, type MemberData } from '$lib/firestore';
import { Member } from '$lib/member';

export default function membersStore(retinueId: string) {
	const { subscribe } = readable<Member[]>([], (set) => {
		if (browser) {
			onSnapshot(query(collection(firestore, `retinues/${retinueId}/members`)), (snapshot) => {
				const data = snapshot.docs.map((doc) => {
					const d = doc.data() as MemberData;
					return new Member(doc.id, d.roles, d.abilities);
				});
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
