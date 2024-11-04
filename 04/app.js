const divElements = document.querySelectorAll("div");
divElements.forEach((div) => {
  div.addEventListener("click", handleClick);
});
document.body.addEventListener("click", handleClick);

function handleClick(e) {
  if (this.tagName === "BODY") {
    divElements.forEach((div) => {
      div.classList.remove("clicked");
    });
    return;
  }

  if (this.className === "grandparent") {
    e.stopPropagation();
  }

  setTimeout(() => {
    this.classList.add("clicked");
  }, this.dataset.time);
}
