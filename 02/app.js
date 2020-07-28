const onEnter = function() {
    console.log('Mouse hovers on the div');
};

const onExit = function() {
    console.log('Mouse is not hovering over div');
};

const init = function() {
    const divEl = document.querySelector('div');

    console.log(divEl);
    if (divEl) {
        divEl.addEventListener('mouseenter', onEnter);
        divEl.addEventListener('mouseleave', onExit);
    };
}


document.addEventListener('DOMContentLoaded', init);