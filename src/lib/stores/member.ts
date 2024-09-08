import { readable } from 'svelte/store';
import { doc, onSnapshot } from 'firebase/firestore';

import { browser } from '$app/environment';
import { firestore, type MemberData } from '$lib/firestore';
import { Member } from '$lib/member';

export default function memberStore(retinueId: string, memberId: string) {
	const { subscribe } = readable<Member>(undefined, (set) => {
		if (browser) {
			onSnapshot(doc(firestore, 'retinues', retinueId, 'members', memberId), (snapshot) => {
				const data = snapshot.data() as MemberData;
				if (data) {
					const member = new Member(memberId, data.roles, data.abilities);
					set(member);
				}
			});
		}
	});

	return {
		subscribe
	};
}
