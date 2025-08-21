const init = function () {
    const div = document.querySelector('div');

    if (div) {
        div.addEventListener('mousemove', function (e) {
            console.log(`${e.type} event`);
        });
        div.addEventListener('mouseleave', function (e) {
            console.log(`${e.type} event`);
        });
    } else {
        console.log(`Element DOM ${div} doesen't exist`);
    };

};
document.addEventListener('DOMContentLoaded', init);