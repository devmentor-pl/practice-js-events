const divs = document.querySelectorAll("div");

function handleDivClick() {
  const time = this.dataset.time;
  console.log(this);

  setTimeout(() => {
    this.classList.add("clicked");
  }, time);
}

function handleBodyClick(e) {
  if (e.target === e.currentTarget) {
    divs.forEach((div) => div.classList.remove("clicked"));
  }
}

divs.forEach((div) => div.addEventListener("click", handleDivClick));

document.body.addEventListener("click", handleBodyClick);
