import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

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
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
