const init = function () {
  const divEl = document.querySelector("div");
  if (divEl) {
    divEl.addEventListener("mouseover", function () {
      console.log("Mouse over div");
    });

    divEl.addEventListener("mouseleave", function () {
      console.log("Mouse left div");
    });
  }
};
document.addEventListener("DOMContentLoaded", init);
