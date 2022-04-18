console.log('ZAD 4')

const child = document.querySelector('.child')
const parent = document.querySelector('.parent')
const grandparent = document.querySelector('.grandparent')

if(child) {
    child.addEventListener('click', function(event) {
        console.log('child')
        event.stopPropagation()
        const time = this.dataset.time
        console.log(time)
        const setColor = function() {
            this.classList.add('clicked')
        } 
        const binded = setColor.bind(this)
        setTimeout(binded, time)
    })
}

if(parent) {
    parent.addEventListener('click', function(event) {
        console.log('parent')
        event.stopPropagation()
        const time = this.dataset.time
        console.log(time)
        const setColor = function() {
            event.target.classList.add('clicked')
        } 
        const binded = setColor.bind(this)
        setTimeout(binded, time)
        
    })
}

if(grandparent) {
    grandparent.addEventListener('click', function(event) {
        console.log('grandparent')
        event.stopPropagation()
        const time = this.dataset.time
        console.log(time)
        const setColor = function() {
            event.target.classList.add('clicked')
        } 
        const binded = setColor.bind(this)
        setTimeout(binded, time)
        
    })
}

const body = document.body
body.addEventListener('click', function(event) {
    // console.log('click body')
    // event.stopPropagation()
    child.classList.remove('clicked')
    parent.classList.remove('clicked')
    grandparent.classList.remove('clicked')
})


window.addEventListener('click', function() {
    console.log('window')
})
document.addEventListener('click', function() {
    console.log('document')
})
document.body.addEventListener('click', function() {
    console.log('body')
})

















