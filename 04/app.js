const divs = document.querySelectorAll("div");
const body = document.querySelector("body");
const addClass = function (e) {
  e.stopImmediatePropagation();
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

//   console.log(thisDiv.dataset.time);
//   setTimeout(addClass, thisDiv.dataset.time);
