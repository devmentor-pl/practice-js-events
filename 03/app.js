document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    const handleClick = e => {
        console.log("clicked");
        e.currentTarget.textContent = "clicked";
    };

    buttons.forEach(button => button.addEventListener("click", handleClick, { once: true }));
});