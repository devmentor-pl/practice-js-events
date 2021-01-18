const divElements = document.querySelectorAll('div');

const addClass = function(e) {
    //This for function
    const thiz = this;
 
    setTimeout(function () { thiz.classList.add('clicked'); }, thiz.dataset.time);


}

const removeClass = function() {
    divElements.forEach(function(el) {
        el.classList.remove('clicked');
    });    
}

divElements.forEach(function(el) {
    el.addEventListener('click', addClass);
})

document.addEventListener('click', removeClass);