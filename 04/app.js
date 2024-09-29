const divs = document.querySelectorAll("div");

divs.forEach(div => {
    div.addEventListener("click", (event) => {
        const delay = event.currentTarget.dataset.time;
        const targetDiv = event.currentTarget;

        setTimeout(() => {
            targetDiv.classList.add("clicked");
        }, delay)
    });
});

document.body.addEventListener("click", (event) => {
    if (event.target === document.body) {
        divs.forEach(div => {
            div.classList.remove("clicked");
        });
    };
});