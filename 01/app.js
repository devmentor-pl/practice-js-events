document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");

    const handleClick = e => console.log("clicked");

    button.addEventListener("click", handleClick);
});