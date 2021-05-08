
const button = document.querySelectorAll("button");

function changeButtonContent() {
    if (this.innerText === "send") {
        console.log("clicked");
    }
    this.innerText = "clicked";
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", changeButtonContent);
}
