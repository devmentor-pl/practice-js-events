document.addEventListener("DOMContentLoaded", () => {
    const divElement = document.querySelector("div");

    const handleMouseMove = e => console.log("mousemove");
    const handleMouseLeave = e => console.log("mouseleave");

    divElement.addEventListener("mousemove", handleMouseMove);
    divElement.addEventListener("mouseleave", handleMouseLeave);
});