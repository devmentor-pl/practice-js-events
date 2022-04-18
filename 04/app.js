console.log('ZAD 4')

const child = document.querySelector('.child')
const parent = document.querySelector('.parent')
const grandparent = document.querySelector('.grandparent')

if(child) {
    child.addEventListener('click', function(event) {
        console.log('child')
        // console.log(this)
        // console.log(e)
        // console.log(e.currentTarget)
        // console.log(e.target)
        event.stopPropagation()
        this.classList.add('clicked')
    })
}

if(parent) {
    parent.addEventListener('click', function(event) {
        console.log('parent')
        // console.log(this)
        // console.log(e)
        // console.log(e.currentTarget)
        // console.log(e.target)
        event.stopPropagation()
        event.target.classList.add('clicked')
    })
}

if(grandparent) {
    grandparent.addEventListener('click', function(event) {
        console.log('grandparent')
        // console.log(this)
        // console.log(e)
        // console.log(e.currentTarget)
        // console.log(e.target)
        event.stopPropagation()
        event.currentTarget.classList.add('clicked')
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

















