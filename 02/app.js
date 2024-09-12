document.addEventListener("DOMContentLoaded", function () {
    const div = document.querySelector("div");
    div.addEventListener("mousemove", function () {
        console.log("Kursor znajduje się nad elementem DIV.");
    });

    div.addEventListener("mouseleave", function () {
        console.log("Kursor opuścił element DIV.");
    });
});
