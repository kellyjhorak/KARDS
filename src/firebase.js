import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// dont mess with this stuff plz
const firebaseConfig = {
  apiKey: "AIzaSyBr8exUNTi4j8H4St45a6WrtUg1AthdRn4",
  authDomain: "den-capstone.firebaseapp.com",
  projectId: "den-capstone",
  storageBucket: "den-capstone.firebasestorage.app",
  messagingSenderId: "812489922191",
  appId: "1:812489922191:web:2d991089c2f981792bc2fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{ auth, db };