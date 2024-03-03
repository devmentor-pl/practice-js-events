//nie działa zatrzymanie EventList..
const button = document.querySelectorAll('button');

button.forEach(function(el) {
    el.addEventListener('click', transformButton); 
    // zatrzymanie po kliknięciu w przycisk
    if(el.innerText === 'clicked') {
        el.removeEventListener('click', transformButton);
    }
})

function transformButton() {
    this.innerText = 'clicked'; 
    console.log('clicked');
}
