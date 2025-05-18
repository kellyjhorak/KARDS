chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/cart")) {
        console.log("cart detected!");
        
        chrome.action.openPopup();
    }
});

// The function above will detect if the url is the amazon cart. It's very easy to change (if we wanted to add other sites other than amazon, for ex.)
// To change it, you really just have to change the amazon link to whatever else.

if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/buy/")) {
    console.log("User proceeded to checkout");
    chrome.storage.local.set({ proceededToCheckoutToday: true });
  }

// function below checks if the user broke their streak -- it ones once a day, when the user first opens the chrome extension for the first time on any given day 
function updateStreak() {
    const today = new Date().toDateString();
  
    chrome.storage.local.get(["lastCheckedDate", "streakCount", "proceededToCheckoutToday"], (data) => {
      const lastChecked = data.lastCheckedDate || null;
      const streak = data.streakCount || 0;
      const proceeded = data.proceededToCheckoutToday || false;
  
      if (lastChecked !== today) {
        const newStreak = proceeded ? 0 : streak + 1;
  
        chrome.storage.local.set({
          lastCheckedDate: today,
          streakCount: newStreak,
          proceededToCheckoutToday: false, // reset daily
        });
      }
    });
  }
  
