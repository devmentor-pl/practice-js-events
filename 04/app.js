let divList = document.querySelectorAll("div");

if (divList) {
  const addClass = function (e) {
    const div = e.currentTarget;
    setTimeout(function () {
      div.classList.add("clicked");
    }, div.dataset.time);
  };

  divList.forEach(function (element) {
    element.addEventListener("click", addClass);
  });

  document.body.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      for (let i = 0; i < divList.length; i++) {
        divList[i].classList.remove("clicked");
      }
    }
  });
}
