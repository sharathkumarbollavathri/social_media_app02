// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaJg9eV17c4PeFFHTvTDfE4fLWXlJ3sj4",
  authDomain: "social-media-app-7eb30.firebaseapp.com",
  projectId: "social-media-app-7eb30",
  storageBucket: "social-media-app-7eb30.appspot.com",
  messagingSenderId: "900924408172",
  appId: "1:900924408172:web:b85e2eaf91d486f56b7349",
  measurementId: "G-DC3B8ZD3J1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
const db = getFirestore(app);

export { db };