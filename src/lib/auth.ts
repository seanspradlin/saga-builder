import { browser } from '$app/environment';
import { app } from '$lib/firebase';
import {
	type Auth,
	getAuth,
	connectAuthEmulator,
	createUserWithEmailAndPassword,
	linkWithCredential,
	linkWithPopup,
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

export const loginWithGoogle = async () => {
	if (!auth.currentUser) {
		return signInWithPopup(auth, googleAuthProvider);
	}
	return linkWithPopup(auth.currentUser, googleAuthProvider);
};
export const loginWithFacebook = async () => {
	if (!auth.currentUser) {
		return signInWithPopup(auth, facebookAuthProvider);
	}
	return linkWithPopup(auth.currentUser, facebookAuthProvider);
};
export const loginWithTwitter = async () => {
	if (!auth.currentUser) {
		return signInWithPopup(auth, twitterAuthProvider);
	}
	return linkWithPopup(auth.currentUser, twitterAuthProvider);
};
