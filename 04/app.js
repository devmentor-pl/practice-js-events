// #04.01 and #04.03
const divList = document.querySelectorAll('div');

const addClass = function() {
    const it = this;

    setTimeout(function() {
        it.classList.add('clicked');
    }, parseInt(it.dataset.time))
}

divList.forEach(function(element) {
    element.addEventListener('click', addClass);
});

// #04.02 
const body = document.querySelector('body');

const removeClass = function() {
    divList.forEach(function(element) {
        element.classList.remove('clicked');
    })
};

body.addEventListener('click', removeClass);

