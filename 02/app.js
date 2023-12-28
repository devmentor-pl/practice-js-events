
const init = function () {
    const div = document.querySelector('div');

    if (div) {
        div.addEventListener('mousemove', function () {
            console.log(`Mouse is on Div`);
        });
        div.addEventListener('mouseleave', function () {
            console.log(`Mouse is Far Away from Div`);
        });
    } else {
        console.log(`Element DOM ${div} doesen't exist`);
    };

};
document.addEventListener('DOMContentLoaded', init);

/* ten kod nie działa...
const div = document.querySelector("div");

if (div) {
    div.addEventListener("mousemove", function () {
        console.log("Mouse is on Div");
    });

    div.addEventListener("mouseleave", function () {
        console.log("Mouse is Far Away from Div");
    });
}
*/