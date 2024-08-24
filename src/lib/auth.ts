import { browser } from '$app/environment';
import { app } from '$lib/firebase';
import {
	getAuth,
	connectAuthEmulator,
	type Auth,
	createUserWithEmailAndPassword
} from 'firebase/auth';

export let auth: Auth;

if (browser) {
	auth = getAuth(app);
	if (window.location.hostname === 'localhost') {
		connectAuthEmulator(auth, 'http://localhost:9099');
	}
}

export const createUser = async (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);
