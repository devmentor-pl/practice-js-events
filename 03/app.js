document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM')

const btns = document.querySelectorAll('button')
console.log(btns)

btns.forEach(function(btn1) {
    btn1.addEventListener('click', clickButton)
})
})

function clickButton(){
        console.log('clicked')
        this.innerText = 'clicked'
        this.removeEventListener('click', clickButton)
}