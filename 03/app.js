const btnList = document.querySelectorAll('button');
const btnClicked = function() {
    this.innerText = 'clicked';
    this.removeEventListener('click', btnClicked);
}

btnList.forEach(function(element){
    element.addEventListener('click', btnClicked)
})