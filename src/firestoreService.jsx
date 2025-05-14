// src/services/firestoreService.js
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase"; // adjust path to your actual firebase.js

// 🔍 Get current user's data (fox coins, streaks, customizations)
export const fetchUserData = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("User document does not exist.");
      return null;
    }
  } else {
    console.log("No user is signed in.");
    return null;
  }
};

// 📝 Update user's data (for streaks, coins, or items)
export const updateUserData = async (updates) => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, updates, { merge: true }); // merge keeps old data
    console.log("User data updated.");
  } else {
    console.log("No user is signed in.");
  }
};

// i put this i here but it is Optional: to Delete user data if needed
export const deleteUserData = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    await deleteDoc(userRef);
    console.log("User document deleted.");
  }
};
