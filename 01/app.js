const btnEl = document.querySelector("button");
const showMessage = function () {
  console.log("clicked");
};
if (btnEl) {
  btnEl.addEventListener("click", showMessage);
}
