const divs = document.querySelectorAll("div");
const body = document.querySelector("body");
const addClass = function (e) {
  let thisDiv = this;
  const timeout = this.dataset.time;
  setTimeout(function () {
    thisDiv.classList.add("clicked");
  }, timeout);
};

const removeClasses = function (e) {
  divs.forEach(function (div) {
    div.classList.remove("clicked");
  });
};

divs.forEach(function (div) {
  div.addEventListener("click", addClass);
});
body.addEventListener("click", removeClasses);
