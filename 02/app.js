const div = document.querySelector("div");
const myFunction = function () {
    console.log("div");
}
const listen = div.addEventListener("mouseover", myFunction);
const listenTwo = div.addEventListener("mouseout", myFunction);