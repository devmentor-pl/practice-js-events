const divElements = document.querySelectorAll("div");

// wstępna wersja funkcji z zadania #04.01
// const addClass = function (e) {
//   e.currentTarget.classList.add("clicked");
// };

divElements.forEach(function (div) {
  const timeToShow = div.getAttribute("data-time");

  div.addEventListener("click", function () {
    setTimeout(function () {
      div.classList.add("clicked");
    }, timeToShow);
  });
});

const removeClass = function () {
  divElements.forEach(function (div) {
    div.classList.remove("clicked");
  });
};

document.body.addEventListener("click", removeClass, true);
