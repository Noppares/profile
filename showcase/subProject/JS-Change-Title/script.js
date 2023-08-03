let docTitke = document.title;
window.addEventListener("blur", () => {
  document.title = "This Title Cahnge now";
});

window.addEventListener("focus", () => {
  document.title = docTitke;
});
