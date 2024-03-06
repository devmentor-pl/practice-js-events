// KONSULTACJE:

//#01 & #03 DZIAŁA
const divElList = document.querySelectorAll('div');

divElList.forEach(function(item) {
    item.addEventListener('click', addNewClass);
})

function addNewClass() {
    const time = this.dataset.time;
    const self = this;  
    setTimeout(function() { // "normalna' funkcja, która zmienia konteksta dla this - nie przekazuje this, stąd tworzymy self
        self.classList.add('clicked');
    }, time);
}

// #02 // DZIAŁA
const body = document.querySelector('body');
body.addEventListener('click', function(event) {
    if(event.target === event.currentTarget) {
        divElList.forEach(removeClass); 
    }
});

function removeClass(el) {
        el.classList.remove('class', 'clicked');
}