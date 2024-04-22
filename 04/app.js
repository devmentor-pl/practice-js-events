const divElements = document.querySelectorAll('div')


// #04.01
divElements.forEach(function(el){

    const adClassFunction = function(event) {
        this.classList.add('clicked')
        event.stopPropagation()
    }

    const timeOutfunction = function(e) {
        const properThis = this;

        const addClassCallFunction = function() {
            adClassFunction.call(properThis, e)
        }

       setTimeout(addClassCallFunction, 2000);
    }

    el.addEventListener('click', timeOutfunction)
})

// #04.02

document.body.addEventListener('click', function(){
    divElements.forEach(function(el){
        if(el.classList.contains('clicked')) {
            el.classList.remove('clicked')
        }
    })
})






