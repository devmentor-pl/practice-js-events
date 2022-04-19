console.log('ZAD 3')


const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

const callback = function(event) {
    console.log('clicked')
    this.innerText = 'clicked'
    this.removeEventListener('click', callback)
}
if(btn1) {
    btn1.addEventListener('click', callback)
}
if(btn2) {
    btn2.addEventListener('click', callback)
}
if(btn3) {
    btn3.addEventListener('click', callback)
}









