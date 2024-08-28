import { browser } from '$app/environment';
import { app } from '$lib/firebase';
import {
	type Auth,
	getAuth,
	connectAuthEmulator,
	createUserWithEmailAndPassword,
	linkWithCredential,
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	TwitterAuthProvider,
	EmailAuthProvider
} from 'firebase/auth';

export let auth: Auth;

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

if (browser) {
	auth = getAuth(app);
	auth.useDeviceLanguage();
	if (window.location.hostname === 'localhost') {
		connectAuthEmulator(auth, 'http://localhost:9099');
	}
}

export const createUser = async (email: string, password: string) => {
	if (!auth.currentUser) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	return linkWithCredential(auth.currentUser, EmailAuthProvider.credential(email, password));
};

export const loginWithGoogle = async () => signInWithPopup(auth, googleAuthProvider);
export const loginWithFacebook = async () => signInWithPopup(auth, facebookAuthProvider);
export const loginWithTwitter = async () => signInWithPopup(auth, twitterAuthProvider);
