const init = function () {
  const divElement = document.querySelector("div");
  const pElement = document.querySelector("p");

  pElement.style.textAlign = "center";

  divElement.addEventListener("mousemove", function (e) {
    pElement.innerText = `O! Znajdujesz się wewnątrz diva, na osi X: ${e.clientX} oraz na osi Y: ${e.clientY}`;
  });
  divElement.addEventListener("mouseleave", function (e) {
    pElement.innerText = `Kurcze, jesteś poza divem. :/`;
  });
};

document.addEventListener("DOMContentLoaded", init);
