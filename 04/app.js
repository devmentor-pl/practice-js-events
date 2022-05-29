const divElements = document.querySelectorAll('div')


const addClickedClass = function(e){
    this.classList.add('clicked')
    e.stopPropagation()
}

divElements.forEach( function(item){
    item.addEventListener(
        'click',
        addClickedClass
    )
})