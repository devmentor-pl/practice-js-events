const init = function () {
    const div = document.querySelector('div');

    const enter = function () {
        console.log('Cursor moves over the div!');
    };

    const leave = function () {
        console.log('Cursor leaves the div!');
    };
    
    if (div) {
        div.addEventListener('mousemove', enter);
        div.addEventListener('mouseleave', leave);
    }
}

document.addEventListener('DOMContentLoaded', init);




