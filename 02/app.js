const mouseIn = function () {
    console.log('You are inside the box.');
};

const mouseOut = function () {
    console.log('You are outside the box.');
};

const init = function () {
    const box = document.querySelector('div');

    if (box) {
        box.addEventListener('mousemove', mouseIn);
        box.addEventListener('mouseleave', mouseOut);
    };
};

document.addEventListener('DOMContentLoaded', init);