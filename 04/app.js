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
    element.addEventListener('click', function(){
        this.classList.add('clicked');
    })
}, 
true)