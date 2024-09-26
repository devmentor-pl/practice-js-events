
const buttonEl = document.querySelectorAll("button");

const changeText = function () {
    this.innerText = "clicked";
    console.log("clicked");

    this.removeEventListener("click", changeText);
}

if(buttonEl){
    buttonEl.forEach(function (element) {
        element.addEventListener("click", changeText);
        
    });
}