const whereIsCursor = function () {
  const divElement = document.querySelector("div");

  const mouseMove = function () {
    divElement.innerHTML = "Kursor porusza się nad boxem";
  };
  const mouseLeave = function () {
    divElement.innerHTML = "Kursor opuścił box";
  };
  if (divElement) {
    divElement.addEventListener("mousemove", mouseMove);
    divElement.addEventListener("mouseleave", mouseLeave);
  }
};
document.addEventListener("DOMContentLoaded", whereIsCursor);
