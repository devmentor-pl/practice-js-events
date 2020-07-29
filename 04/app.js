const allDivs = document.querySelectorAll('div');
const body = document.querySelector('body');

console.log(allDivs);
console.log(body);

function addClass() {};

function timeOut(time) {
    setTimeout(addClass, time)
};

allDivs.forEach(function(item) {
    console.log(item.dataset.time);
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        const self = e.currentTarget;
        setTimeout(function() {
            self.classList.add('clicked');
        }, item.dataset.time);
    });
    body.addEventListener('click', function(e) {
        e.stopPropagation();
        item.classList.remove('clicked');
    });
});