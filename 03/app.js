
const buttonEl = document.querySelectorAll('button');

const clickedButton = function(e) {
    if(this.innerText === 'send') {
        this.innerText = 'clicked';
    console.log(this.innerText);
    }
}

buttonEl.forEach( function(item) {
    item.addEventListener('click', clickedButton);
});