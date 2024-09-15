document.addEventListener('DOMContentLoaded', init);

const onMousemove = function () {
    console.log('mousemove');
}
const onMouseleave = function () {
    console.log('mouseleave');
}

function init() {
    const box = document.querySelector('div');
    if (box) {
        box.addEventListener('mousemove', onMousemove);
        box.addEventListener('mouseleave', onMouseleave);
    }
}