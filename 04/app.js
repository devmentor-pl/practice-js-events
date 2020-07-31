const allDivs = document.querySelectorAll('div');
const body = document.querySelector('body');

console.log(allDivs);
console.log(body);

function addClass(el) {
    el.classList.add('clicked');
};

function timeOut(time) {
    setTimeout(function() {
        addClass(el)
    }, time);
};

allDivs.forEach(function(item) {
    console.log(item.dataset.time);
    item.addEventListener('click', function(e) {
        timeOut(e.currentTarget, e.currentTarget.dataset.time);
    });
    body.addEventListener('click', function(e) {
        e.stopPropagation();
        item.classList.remove('clicked');
    });
});