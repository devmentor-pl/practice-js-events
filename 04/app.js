document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM')

const divElements = document.querySelectorAll('div')
console.log(divElements)

divElements.forEach(function(container) {
    container.addEventListener('click', function(){
        console.log('click', this)
        
        const time = this.dataset.time
        const self = this
        setTimeout(function() {
            self.classList.add('clicked')
        }, time)
    })
})
const bodyElements = document.querySelector('body')
console.log(bodyElements)
bodyElements.addEventListener('click', function(e){
    console.log('click on body', e.target, e.currentTarget)
    
    if(e.target === e.currentTarget) {
    divElements.forEach(function(container) {
        container.classList.remove('clicked')
    })}
})
})
