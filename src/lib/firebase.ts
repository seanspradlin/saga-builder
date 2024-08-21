import { initializeApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { browser } from '$app/environment';

export let analytics: Analytics;
export let firestore: Firestore;
if (browser) {
	const firebaseConfig = {
		apiKey: 'AIzaSyCYODgeQ0DcvCE-9q7jHWT8rPu8bM1rZf0',
		authDomain: 'saga-build.firebaseapp.com',
		projectId: 'saga-build',
		storageBucket: 'saga-build.appspot.com',
		messagingSenderId: '674161419504',
		appId: '1:674161419504:web:a809a2bd3b432552560e35',
		measurementId: 'G-QQPY4CRKGL'
	};

	const app = initializeApp(firebaseConfig);
	analytics = getAnalytics(app);
	firestore = getFirestore(app);
}
