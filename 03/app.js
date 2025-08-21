"use strict";

const btnsEl = document.querySelectorAll("button");

const clickBtn = function (e) {
  this.textContent = "clicked";
  let counter = 0;
  this.removeEventListener("click", clickBtn);
  console.log("clicked");
};

if (btnsEl) {
  btnsEl.forEach(function (btn) {
    btn.addEventListener("click", clickBtn);
  });
}
