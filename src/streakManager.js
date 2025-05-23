import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db, auth } from "./firebase";

export async function updateStreakAndCoins() {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;
  const today = new Date().toDateString();

  chrome.storage.local.get(["lastCheckedDate", "proceededToCheckoutToday"], async (data) => {
    const lastChecked = data.lastCheckedDate || null;
    const brokeStreak = data.proceededToCheckoutToday || false;

    if (lastChecked !== today) {
      const userRef = doc(db, "users", uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) return;

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

      console.log(`Streak updated to ${newStreak}, coins awarded: ${coinsEarned}`);
    }
  });
}
