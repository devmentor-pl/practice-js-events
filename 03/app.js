const buttonElements = document.querySelectorAll("button");

buttonElements.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick(e) {
  console.log("clicked");
  e.target.textContent = "clicked";
  e.target.removeEventListener("click", handleClick);
}
