console.log('ZAD 4')

const child = document.querySelector('.child')
const parent = document.querySelector('.parent')
const grandparent = document.querySelector('.grandparent')

const addColor = function(event) {
    console.log('click ' + this.className)
    event.stopPropagation()
    const time = this.dataset.time
    console.log('wait...' + time)
    const setColor = function(div) {
        console.log('add backgroundColor to ' + div.className)
        div.classList.add('clicked')
    } 
    setTimeout(function() {
        setColor(event.target)
    }, time)
    if(this.className === 'child') {
        console.log('CLICK child and change color for each DIV')

        const parent = this.parentElement
        const parentTime = parent.dataset.time 
        console.log(parent.className + ' ' + parentTime)
        setTimeout(function() {
            setColor(parent)
        }, parentTime)

        const grandparent = parent.parentElement
        const grandparentTime = grandparent.dataset.time 
        console.log(grandparent.className + ' ' + grandparentTime)
        setTimeout(function() {
            setColor(grandparent)
        }, grandparentTime)
    }
}
if(child) {
    child.addEventListener('click', addColor)
}

if(parent) {
    parent.addEventListener('click', addColor)
}

if(grandparent) {
    grandparent.addEventListener('click', addColor)
}

const body = document.body
body.addEventListener('click', function(event) {
    child.classList.remove('clicked')
    parent.classList.remove('clicked')
    grandparent.classList.remove('clicked')
})

















