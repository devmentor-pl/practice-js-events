const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  if (button) {
    button.addEventListener("click", function clicked() {
      button.textContent = "clicked";
      console.log("clicked");
      button.removeEventListener("click", clicked);
    });
  }
});
