const divElements = document.querySelectorAll('div')
const bodyElement = document.querySelector('body')


const addClickedClass = function(e){
    this.classList.add('clicked')
    e.stopPropagation()
}

const removeClickedClass = function(e){
    divElements.forEach( function(item){
        item.classList.remove('clicked')
    })
}

divElements.forEach( function(item){
    item.addEventListener(
        'click',
        addClickedClass
    )
})

bodyElement.addEventListener(
    'click',
    removeClickedClass
)