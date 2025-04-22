chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("amazon.com/gp/cart")) {
        console.log("cart detected!");
        
        chrome.action.openPopup();
    }
});

// The function above will detect if the url is the amazon cart. It's very easy to change (if we wanted to add other sites other than amazon, for ex.)
// To change it, you really just have to change the amazon link to whatever else.
