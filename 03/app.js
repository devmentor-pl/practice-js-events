const buttons = document.querySelectorAll("button");
const myFunction = function () {
    console.log("clicked")
    this.innerText = "clicked";
}
buttons.forEach(function(element) {
    element.addEventListener("click", myFunction)
})