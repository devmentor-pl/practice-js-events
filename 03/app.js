const btn = document.querySelectorAll("button");

function handleClicked(event) {
    if (event.target.innerText !== "clicked") {
        console.log("clicked" + event.target.innerText);
        event.target.innerText = "clicked";
    }
}

btn.forEach(function (button) {
    button.addEventListener("click", handleClicked);
});
