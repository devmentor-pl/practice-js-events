const divElements = document.querySelectorAll('div')



// #04.01
divElements.forEach(function(el){
    // console.log(el.dataset.time);

    const delayTime = el.dataset.time

    const adClassFunction = function(event) {
        this.classList.add('clicked')
        event.stopPropagation()
    }

    const timeOutfunction = function(e) {
        const properThis = this;

        const addClassCallFunction = function() {
            adClassFunction.call(properThis, e)
        }

       setTimeout(addClassCallFunction, delayTime);
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






