import type { User } from 'firebase/auth';
import { writable } from 'svelte/store';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { auth } from '$lib/auth';
import { browser } from '$app/environment';

export const user = writable<User | null>(null);
export const isLoading = writable<boolean>(true);

if (browser && auth) {
	onAuthStateChanged(auth, (userInfo) => {
		if (userInfo) {
			user.set(userInfo);
			isLoading.set(false);
		} else {
			signInAnonymously(auth).catch((err) => {
				console.error(err.message);
			});
		}
	});
}
