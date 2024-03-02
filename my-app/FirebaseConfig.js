// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhEW0i38BgZmCZpcv8oEObwyoTFEH0t5U",
  authDomain: "lu-24-hackathon-mx.firebaseapp.com",
  projectId: "lu-24-hackathon-mx",
  storageBucket: "lu-24-hackathon-mx.appspot.com",
  messagingSenderId: "613467701599",
  appId: "1:613467701599:web:2195ff1c9af2bc441536ea",
  measurementId: "G-H82SW9J4KR"
};

// Initialize Firebase
export const FIREBASE_APP= initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);