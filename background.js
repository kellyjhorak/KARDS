import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./src/firebase"; 

// firestorez
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// for recognizing when a purchase was made
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/cart")) {
    console.log("Cart detected!");
  }

  if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/buy/thankyou")) {
    console.log("Purchase confirmed ending streak");
    chrome.storage.local.set({ proceededToCheckoutToday: true });
  }
});

// updatez
async function updateStreakAndCoins() {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;
  const today = new Date().toDateString();

  // the logic for if a streak has been broken or not
  chrome.storage.local.get(["lastCheckedDate", "proceededToCheckoutToday"], async (data) => {
    const lastChecked = data.lastCheckedDate || null;
    const brokeStreak = data.proceededToCheckoutToday || false;

    if (lastChecked !== today) {
      const userRef = doc(db, "users", uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) return;

      // idk if this works or not
      const currentData = snap.data();
      const currentStreak = currentData.streak || 0;
      const currentCoins = currentData.coins || 0;

      const newStreak = brokeStreak ? 0 : currentStreak + 1;
      const coinsEarned = brokeStreak ? 0 : 5; 

      await updateDoc(userRef, {
        streak: newStreak,
        coins: currentCoins + coinsEarned,
      });

      chrome.storage.local.set({
        lastCheckedDate: today,
        proceededToCheckoutToday: false,
      });
    }
  });
}

chrome.runtime.onStartup.addListener(() => {
  updateStreakAndCoins();
});
