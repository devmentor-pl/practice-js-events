const divList = [...document.getElementsByTagName('div')];
const body = document.querySelector('body');

divList.forEach(function(el) {
    el.addEventListener('click', function() {
        const div = this;
        setTimeout(function() {
            div.classList.add('clicked');
        }, div.dataset.time);
        
    })
});

body.addEventListener('click', function() {
    removeElementsClass(divList, 'clicked');
});




function removeElementsClass(elements, attr) {
    elements.forEach(function(el) {
        el.classList.remove(attr);
    })
};

function fillWithColors() {

}

