const btnList = document.querySelectorAll('button');

let changeText = function() {
    this.innerText = 'clicked';
    console.log(this.innerText);
    this.removeEventListener('click', changeText);
}

btnList.forEach(function(element){
    element.addEventListener('click', changeText);
});






