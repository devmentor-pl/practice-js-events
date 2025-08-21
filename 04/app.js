const bodyEl = document.querySelector('body');
const divElList = document.querySelectorAll('div');

bodyEl.addEventListener('click', function(){
    divElList.forEach(function(element){
        if (element.className.includes('clicked')) {
            element.classList.remove('clicked');
        }
    })
}, 
true)

divElList.forEach(function(element){
    const currDiv = element;
    element.addEventListener('click', function() {
        setTimeout(function() {
            currDiv.classList.add('clicked');
        }, currDiv.dataset.time);
    })
}, 
true)