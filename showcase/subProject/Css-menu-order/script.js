let navigation_menu = document.querySelector(".navigation_menu");
document.querySelector(".toggle").onclick = function () {
  this.classList.toggle("active");
  navigation_menu.classList.toggle("active");
};
