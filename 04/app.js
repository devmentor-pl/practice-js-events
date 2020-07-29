const allDivs = document.querySelectorAll('div');
const body = document.querySelector('body');

console.log(allDivs);
console.log(body);

function addClass(e) {
    e.stopPropagation();
    e.currentTarget.classList.add('clicked');
};

function timeOut(time) {
    setTimeout(addClass, time)
};

allDivs.forEach(function(item) {
    item.addEventListener('click', addClass);
    body.addEventListener('click', function(e) {
        e.stopPropagation();
        item.classList.remove('clicked');
    });
});