const divList = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');

const addClass = function() {
    const element = this;
    const addClicked = function() {element.classList.add('clicked');}
    const attribute = parseInt(this.dataset.time);
    setTimeout(addClicked, attribute);
}

divList.forEach(function(item){
    item.addEventListener('click', addClass);
});


const removeClass = function() {
    const addedClassList = document.querySelectorAll('.clicked');
    addedClassList.forEach(function(element){
        element.classList.remove('clicked');
    });
}

bodyElement.addEventListener('click', removeClass, true);
