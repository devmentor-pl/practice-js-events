const btnsList = document.querySelectorAll('button');

const changeText = function (e) {
    this.innerText = 'clicked';
    console.log(this.innerText);
   
        this.removeEventListener('click', changeText, true);
    
}



btnsList.forEach(function (btnEl) {
    btnEl.addEventListener('click', changeText, true)
})