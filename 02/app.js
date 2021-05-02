
const init = function() {
    const divElement = document.querySelector("div");

    if(divElement) {
    divElement.addEventListener("mouseenter", onDiv);
    divElement.addEventListener("mouseleave", offDiv);
    };
};

const onDiv = function(){
    console.log("MouseEnter");
};

const offDiv = function(){
    console.log("MouseLeave");
};

document.addEventListener("DOMContentLoaded", init);

