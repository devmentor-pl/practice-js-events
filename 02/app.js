
function turnOnDiv() {
    const div = document.querySelector("div");
    div.style.backgroundColor = 'green';
    console.log("MouseEnter");
};

function turnOffDiv() {
    const div = document.querySelector("div");
    div.style.backgroundColor = 'white';
    console.log("MouseLeave");
};

function listeningOfDiv() {
    const div = document.querySelector("div");
    div.addEventListener("mouseenter", turnOnDiv);
    div.addEventListener("mouseleave", turnOffDiv);
};

document.addEventListener("DOMContentLoaded", listeningOfDiv);
