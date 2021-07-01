const divsList = document.querySelectorAll('div');
const bodyEl = document.querySelector('body');
console.log(bodyEl);
console.log(divsList);

const addClass = function() {
    this.classList.add('clicked');
}


divsList.forEach(function(el) {
    el.addEventListener('click', addClass);
});