document.addEventListener("DOMContentLoaded", function () {
    function navigateTo(page) {
        window.location.href = chrome.runtime.getURL(`src/${page}/${page}.html`);
    }

    document.getElementById("denButton").addEventListener("click", function () {
        navigateTo("den");
    });

    document.getElementById("shopButton").addEventListener("click", function () {
        navigateTo("shop");
    });

});
