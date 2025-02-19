document.addEventListener("DOMContentLoaded", () => {
    const clickActions = {
        addClicked: el => setTimeout(() => el.classList.add("clicked"), parseInt(el.dataset.time, 10) || 0),
        removeClicked: el => el.classList.remove("clicked")
    };

    const registerClick = (el, action) => el.addEventListener("click", e => action(e.currentTarget));

    const divs = document.querySelectorAll("div");
    divs.forEach(div => registerClick(div, clickActions.addClicked));
    document.body.addEventListener("click", e => e.target === document.body && divs.forEach(div => clickActions.removeClicked(div)));
});