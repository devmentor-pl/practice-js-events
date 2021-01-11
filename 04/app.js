//zad 04.01
const divs = document.querySelectorAll('div');

const addClassToElement = function() {
    this.classList.add('clicked');
}

divs.forEach(function(item) {
    item.addEventListener('click', addClassToElement);
})


//zad 04.02
const body = document.querySelector('body');

body.addEventListener('click', function(){
    this.classList.remove('clicked');
})