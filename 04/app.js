const divList = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');
const divClickHandler = function(e) {
    const element = this;
    
    setTimeout(function() {
        element.classList.add('clicked');
    }, this.dataset.time);
    if(this.classList.contains('grandparent')) {
        e.stopPropagation();
    }
}
const bodyClickHandler = function() {
    divList.forEach(function(element) {
        element.classList.remove('clicked');
    })
}

divList.forEach(function(div) {
    div.addEventListener('click', divClickHandler);
})
bodyElement.addEventListener('click', bodyClickHandler);