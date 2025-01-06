//04.01

const divList = document.querySelectorAll('div');
const delay = 2000;

const handleClick = function(e){
    // e.stopPropagation();
    setTimeout(() => {
        this.classList.add('clicked');
    }, delay);
    
}

divList.forEach((div) => {
    div.dataset.delay = 2000;
    div.addEventListener('click', handleClick);
    
})



//04.02

const body = document.querySelector('body');

const removeClass = function(e){
    if (e.target === this){
        const clickedElements = document.querySelectorAll('.clicked');
        clickedElements.forEach((div) => {
            div.classList.remove('clicked');
        })
    }
}

body.addEventListener('click', removeClass);


