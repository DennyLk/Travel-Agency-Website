document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".header-finder-guests-btn"); // Make sure the class matches your HTML
  var guestsChoice = document.getElementById("guests-choice"); // Ensure the ID matches your HTML

  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the click from propagating
    guestsChoice.style.display = guestsChoice.style.display === "block" ? "none" : "block";
  });

  // Consolidate document click logic
  document.addEventListener("click", function (event) {
    if (!guestsChoice.contains(event.target) && !button.contains(event.target)) {
      guestsChoice.style.display = "none";
    }
  });

  guestsChoice.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click inside the dropdown from closing it
  });
});
