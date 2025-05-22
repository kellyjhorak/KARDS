import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// getting user info from firestore users collection
export const getUserData = async (uid) => {
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);
  return snap.exists() ? snap.data() : null;
};

// this is for new users who just created an account, when they create an account using firebase auth a firestore user is created
export const createUserData = async (uid, username) => {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    username,
    coins: 0,
    streak: 0,
    tops: [],
    bottoms: [],
  });
};

// updatez
export const updateUserData = async (uid, updates) => {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, updates);
};
