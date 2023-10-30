// document.addEventListener("DOMContentLoaded", function () {
//     const div = document.querySelector("div");

//     if (div) {
//         div.addEventListener("mouseleave", function () {
//             console.log("opuszczenie elementu przez kursor");
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const div = document.querySelector("div");

//     if (div) {
//         div.addEventListener("mouseenter", function () {
//             for (let i = 0; i < mouseenter; i++) {
//                 console.log(" poruszanie się kursora nad tym elementem");
//             }
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const div = document.querySelector("div");
    div.addEventListener("mousemove", function () {
        console.log("Kursor znajduje się nad elementem DIV.");
    });

    div.addEventListener("mouseleave", function () {
        console.log("Kursor opuścił element DIV.");
    });
});

// Obsługuje zdarzenie "mouseout" (opuszczenie elementu przez kursor)
