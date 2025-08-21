const btnsList = document.querySelectorAll('button');

btnsList.forEach(function(btnEl){
    btnEl.addEventListener('click', changeText);
});

function changeText() {
    console.log('clicked');
    this.innerText = 'clicked';
    this.removeEventListener('click', changeText);
}