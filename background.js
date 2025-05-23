chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/cart")) {
    console.log("Cart detected!");
    chrome.action.openPopup();
  }

  if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/buy/thankyou")) {
    console.log("Purchase confirmed ending streak");
    chrome.storage.local.set({ proceededToCheckoutToday: true });
  }
});