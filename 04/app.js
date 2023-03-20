//4.01
const divs =  document.querySelectorAll('div');
const body = document.querySelector('body');

if(divs) {
    divs.forEach(function(div){
        div.addEventListener('click', addClass)
    })    
}


body.addEventListener('click', removeClasses)



function addClass(e) {
    const currentElement = e.currentTarget;
    
    setTimeout(function(){
        console.log(currentElement);
        currentElement.classList.add('clicked');
    }, currentElement.dataset.time)    
}

function removeClasses(e) {
    if(e.target===e.currentTarget) {
        divs.forEach(function(div){
            div.classList.remove('clicked');
        })
    }
}