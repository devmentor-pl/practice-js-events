const divList = document.querySelectorAll('div')
const body = document.querySelector('body')

const addClickedClassToDiv = function (event) {
    const element = event.currentTarget
    const timeout = setTimeout(function() {
        element.classList.add('clicked')   
    }, element.dataset.time)
}

const removeClickedClass = function (event) {
    if(event.target.tagName === 'DIV') return

    divList.forEach(function(el) {
        el.classList.remove('clicked')
        console.log('removed from ' + el.tagName)
    })
}

divList.forEach(function (el) {
    el.addEventListener('click', addClickedClassToDiv)
})

body.addEventListener('click', removeClickedClass)