// pobieranie buttonów 
const buttons = document.querySelectorAll("button")


function changeText (change) {
    change.target.textContent = "clicked"
    console.log("clicked");

    change.target.removeEventListener('click', changeText )
}

buttons.forEach(button => {
    button.addEventListener("click", changeText);
});