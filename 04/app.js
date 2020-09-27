const divList = document.querySelectorAll("div");
const body = document.querySelector("body");

divList.forEach((div) => {
  const time = div.dataset.time || 1000;

  div.addEventListener("click", (e) => {
    const elem = e.currentTarget;

    setTimeout(() => {
      elem.classList.add("clicked");
    }, time);
  });
});

if (body) {
  body.addEventListener("click", (e) => {
    if (e.currentTarget === e.target) {
      divList.forEach((div) => {
        div.classList.remove("clicked");
      });
    }
  });
}
