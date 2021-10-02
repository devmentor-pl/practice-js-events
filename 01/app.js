const btn = document.querySelector('button');
let counter = 0;
const clickCounter = function(){

    if(btn) {
        counter++;
        console.log('Kliknąłeś ' + counter + ' razy.');
    }
}


btn.addEventListener('click', clickCounter);