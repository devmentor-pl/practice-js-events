"use strict";

const divsEl = document.querySelectorAll("div");
const body = document.querySelector("body");

const addClass = function (e) {
  //   e.stopPropagation();
  const delay = this.dataset.time;

  setTimeout(() => {
    this.classList.add("clicked");
  }, delay);
};

const deleteClassFromDivs = function () {
  divsEl.forEach(function (item) {
    item.classList.remove("clicked");
  });
};

divsEl.forEach(function (item) {
  item.addEventListener("click", addClass);
});

body.addEventListener("click", deleteClassFromDivs);
