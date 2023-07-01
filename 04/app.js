const divEls = document.querySelectorAll("div");

divEls.forEach((el) => {
  el.addEventListener("click", function (e) {
    const time = this.dataset.time;
    setTimeout(() => this.classList.add("clicked"),time)
    
    // e.stopPropagation();
  });
});

document.body.addEventListener("click", (e) => {
  const isDiv = e.target.tagName.toLowerCase() === "div";
  if (isDiv) return;

  divEls.forEach((el) => el.classList.remove("clicked"));
});
