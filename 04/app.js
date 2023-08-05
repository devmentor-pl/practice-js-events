const divEl = document.querySelectorAll("div");
const bodyEl = document.querySelector("body");

const addClass = function (e) {
  const time = this.dataset.time;
  const div = this;
  setTimeout(function () {
    div.classList.add("clicked");
  }, time);
};
const removeClass = function () {
  divEl.forEach(function (item) {
    item.classList.remove("clicked");
  });
};
divEl.forEach(function (item) {
  item.addEventListener("click", addClass);
});
bodyEl.addEventListener("click", removeClass);
