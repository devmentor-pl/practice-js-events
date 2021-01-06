const init = function() {

const btnsList = document.querySelectorAll('button');
// console.log(btnsList);

const addText = function(event) {

    if(event){
    this.innerText = 'clicked';
    console.log('clicked');
    
    // console.log(event.currentTarget.indexOf);
    //?dev trochę nie wiem jak to zrobić gdybym dokładnie w tym miejscu chciał w konsoli wyświetlać 
    // Kliknięto przycisk nr 1 / Kliknięto przycisk nr 2...
    // W sensie jak w tym miejscu pobrać index btnEl
    };
};

btnsList.forEach(function(btnEl, index) {
    if(btnEl){
        btnEl.addEventListener('click', addText, {once: true});
    };
});

};
document.addEventListener('DOMContentLoaded', init);
