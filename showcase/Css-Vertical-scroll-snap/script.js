// Get the button element by its id
const moveToTopBtn = document.getElementById("moveToTopBtn");

// Add a click event listener to the button
moveToTopBtn.addEventListener("click", function() {
  // Scroll the page to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
