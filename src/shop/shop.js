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

  /* Shop Item toggle functionality, Might add later (there is pre-existing css for it too) - Aaron
  document.getElementById("toggleGlasses").addEventListener("click", function () {
      document.getElementById("foxGlasses").classList.toggle("hidden");
  });

  document.getElementById("toggleShirt").addEventListener("click", function () {
      document.getElementById("foxShirt").classList.toggle("hidden");
  });

  document.getElementById("resetFox").addEventListener("click", function () {
      document.getElementById("foxGlasses").classList.add("hidden");
      document.getElementById("foxShirt").classList.add("hidden");
  });*/
});
