const btn = document.querySelector('button');
let counter = 0;
const clickCounter = function(){

    counter++;
    console.log('Kliknąłeś ' + counter + ' razy.');
}

if(btn) {
    btn.addEventListener('click', clickCounter);
}