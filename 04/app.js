const divs = document.querySelectorAll('div');
const body = document.querySelector('body');


const addClass = function () {
    const div = this; 
    const delay = div.dataset.time;
    setTimeout(function () {
        div.classList.add('clicked');
    }, delay);
};

const removeClass = function () {
    divs.forEach(function(div) {
        div.classList.remove('clicked');
    })
};

divs.forEach(function(div) {
    div.addEventListener('click', addClass);
});

body.addEventListener('click', removeClass, true);