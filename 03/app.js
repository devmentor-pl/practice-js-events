//DZIAŁA
const button = document.querySelectorAll('button');

button.forEach(function(el) {
    el.addEventListener('click', transformButton); 
})

function transformButton() {
    this.innerText = 'clicked'; 
    console.log('clicked');
    this.removeEventListener('click', transformButton);
}
