// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr8exUNTi4j8H4St45a6WrtUg1AthdRn4",
  authDomain: "den-capstone.firebaseapp.com",
  projectId: "den-capstone",
  storageBucket: "den-capstone.firebasestorage.app",
  messagingSenderId: "812489922191",
  appId: "1:812489922191:web:2d991089c2f981792bc2fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Add Firestore and Auth
export const auth = getAuth(app);       // For user login
export const db = getFirestore(app);    // For storing user data like fox coins, streaks, etc.
