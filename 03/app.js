const btnList = document.querySelectorAll('button');
let counter = 0;

let changeText = function() {
    counter++; // tutaj jest cos nie tak ale nie wiem i chyba nie dojde do tego, pozwala mi kliknąc 5x 
    
    if (counter>=3) {
        this.removeEventListener('click', changeText);
    }

    this.innerText = 'clicked';
    console.log(this.innerText);
    console.log(counter);   
}

btnList.forEach(function(element){
    element.addEventListener('click', changeText);
});






