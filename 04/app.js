document.addEventListener("DOMContentLoaded", () => {
    const timeouts = new Map();
    const clickActions = {
        addClicked: el => (clickActions.removeTimeout(el), timeouts.set(el, setTimeout(() => (el.classList.add("clicked"), timeouts.delete(el)), parseInt(el.dataset.time, 10) || 0))),
        removeClicked: el => (clickActions.removeTimeout(el), el.classList.remove("clicked")),
        removeTimeout: el => (timeouts.has(el) ? (clearTimeout(timeouts.get(el)), timeouts.delete(el)) : null)
    };

    const registerClick = (el, action) => el.addEventListener("click", e => action(e.currentTarget));
    
    const divs = document.querySelectorAll("div");
    divs.forEach(div => registerClick(div, clickActions.addClicked));
    document.body.addEventListener("click", e => e.target === document.body && divs.forEach(div => clickActions.removeClicked(div)));
});