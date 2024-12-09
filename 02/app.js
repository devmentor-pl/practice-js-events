"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const divEl = document.querySelector("div");

  const mouseAbove = function () {
    divEl.addEventListener("mousemove", function () {
      const info = "You move above the div";
      console.log(info);
      giveInfo(info);
    });
  };

  const mouseLeave = function () {
    const info = "You left the div";
    console.log(info);
    giveInfo(info);
  };

  function giveInfo(text) {
    divEl.textContent = text;
  }

  if (divEl) {
    divEl.addEventListener("mouseover", mouseAbove);
    divEl.addEventListener("mouseout", mouseLeave);
  }
});
