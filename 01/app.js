"use strict";

const btnEl = document.querySelector("button");

const clickMe = function () {
  console.log("clicked");
};

if (btnEl) {
  btnEl.addEventListener("click", clickMe);
}
