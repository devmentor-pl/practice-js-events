document.addEventListener('DOMContentLoaded', function(){

    const divElements = document.querySelectorAll('div');
    const body = document.querySelector('body');
    const addClickClass = function(el){
        
        let element = this;
        let dataValue = this.dataset.time
       
        function timeFunction(el){
            el.classList.add('clicked');
        }
        
        setTimeout(timeFunction, dataValue, element);

    }
    const removeClickClass = function() {

        divElements.forEach(function(el){
            el.classList.remove('clicked');
        });
    }



    if(divElements) {
        divElements.forEach(function(el) {

            el.addEventListener('click', addClickClass);
        });
    }
    body.addEventListener('click', removeClickClass, true);
});
