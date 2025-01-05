//04.01

const divList = document.querySelectorAll('div');

const handleClick = function(e){
    e.stopPropagation();
    this.classList.add('clicked');
}

divList.forEach((div) => {
    div.addEventListener('click', handleClick);
    
})

//04.02

const body = document.querySelector('body');

const removeClass = function(){
    const clickedElements = document.querySelectorAll('.clicked');
    clickedElements.forEach((div) => {
        div.classList.remove('clicked');
    })
}

body.addEventListener('click', removeClass);