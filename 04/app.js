const divs = document.querySelectorAll("div");

divs.forEach(div => {
    div.addEventListener("click", function() {
     
        this.classList.add("clicked");
    });
});

// 2
document.body.addEventListener('click', event => {
    if (event.target === document.body) {
        divs.forEach(div => {
            div.classList.remove('clicked');
        });
    }
});


function changeColorDelay() {
    divs.forEach((div) => {
        const time = parseInt(div.dataset.time);
        setTimeout(() => {
            div.style.backgroundColor = window.getComputedStyle(div).getPropertyValue('--color-grandparent'); }, time);
    });
}

divs[0].addEventListener('click', () => {
    changeColorDelay();
});
