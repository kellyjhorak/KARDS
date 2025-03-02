// Toggle glasses on/off
function toggleGlasses() {
  const glassesEl = document.getElementById("foxGlasses");
  glassesEl.classList.toggle("hidden");
}

// Toggle shirt on/off
function toggleShirt() {
  const shirtEl = document.getElementById("foxShirt");
  shirtEl.classList.toggle("hidden");
}

// Reset fox to "undressed" state
function resetFox() {
  document.getElementById("foxGlasses").classList.add("hidden");
  document.getElementById("foxShirt").classList.add("hidden");
}
