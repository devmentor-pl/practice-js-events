document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const handleClick = e => console.log("clicked");

    button && button.addEventListener("click", handleClick);
});