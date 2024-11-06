// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: '***REMOVED***',
    authDomain: 'movie-catalog-14b18.firebaseapp.com',
    projectId: 'movie-catalog-14b18',
    storageBucket: 'movie-catalog-14b18.firebasestorage.app',
    messagingSenderId: '23201455350',
    appId: '1:23201455350:web:326b82f3493681b620e0d7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();
