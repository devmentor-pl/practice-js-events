const divElementsList = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');

const addClass = function() {
    const thisLink = this;
    const atr = parseInt(this.dataset.time);
    const assignClass = function(){
        thisLink.classList.add('clicked')
    }

    setTimeout(assignClass, atr);
}

divElementsList.forEach(function(element) {
    element.addEventListener('click', addClass);
})

const removeClassFromDivs = function() {
    divElementsList.forEach(function(element) {
        element.classList.remove('clicked');
    });
}

bodyElement.addEventListener('click', removeClassFromDivs, true);