const divList = document.querySelectorAll("div");
const body = document.querySelector("body");

divList.forEach(function (el) {
  el.addEventListener("click", classHandler);
});

body.addEventListener("click", classRemover, true);

function classHandler() {
  const time = this.dataset.time;
  const self = this;
  setTimeout(function () {
    self.classList.add("clicked");
  }, time);
}

function classRemover() {
  divList.forEach(function (el) {
    el.classList.remove("clicked");
  });
}
