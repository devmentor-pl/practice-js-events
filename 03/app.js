const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click',clickHandle)
})   

function clickHandle() {
    console.log('clicked');
    this.innerText = 'clicked';
    this.removeEventListener('click',clickHandle);
}