const btns = document.querySelectorAll('button');

function clickHandler() {
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', clickHandler)
}
btns.forEach(function(btn){
    btn.addEventListener('click', clickHandler)
})