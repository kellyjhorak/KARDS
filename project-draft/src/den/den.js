document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(page) {
        window.location.href = chrome.runtime.getURL(`src/${page}/${page}.html`);
    }

    document.getElementById("homeButton").addEventListener("click", function () {
        navigateTo("home");
    });

    document.getElementById("shopButton").addEventListener("click", function () {
        navigateTo("shop");
    });

});
