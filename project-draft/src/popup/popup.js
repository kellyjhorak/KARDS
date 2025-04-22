document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(page) {
        window.location.href = chrome.runtime.getURL(`src/${page}/${page}.html`);
    }

    document.getElementById("homeButton").addEventListener("click", function () {
        navigateTo("home");
    });

    document.getElementById("denButton").addEventListener("click", function () {
        navigateTo("den");
    });

    document.getElementById("shopButton").addEventListener("click", function () {
        navigateTo("shop");
    });


    // Checks if the chrome tab is the amazon cart
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0].url.includes("amazon.com/gp/cart")) {
            console.log("Popup opened due to Amazon cart detection.");
        }
    });
});
