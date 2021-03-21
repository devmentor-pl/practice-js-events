const btnElements = document.querySelectorAll('button');


const btnEvents = function(e) {
    this.innerText = 'clicked';
    console.log('clicked');

}

btnElements.forEach(function(el) {
    el.addEventListener('click', btnEvents);
})