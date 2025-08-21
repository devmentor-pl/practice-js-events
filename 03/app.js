const buttons = document.querySelectorAll(".button");

const clickButton = (event) => {
    event.target.innerText = "clicked"
    console.log("clicked");

    event.target.removeEventListener("click", clickButton);
}

buttons.forEach(button => {
    button.addEventListener("click", clickButton);
});