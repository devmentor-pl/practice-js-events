const divlist = document.querySelectorAll('div');
const bodyE = document.querySelector('body');


function addClass(){
    this.classList.add('clicked');
}

const removeClassFromDiv = function(e){
    if(e.target === bodyE){
    divlist.forEach(function(element){
        element.classList.remove('clicked');
        })
    }
}

divlist.forEach(function(element){
    element.addEventListener('click', addClass);
})

bodyE.addEventListener('click', removeClassFromDiv);
