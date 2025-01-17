
const divList = document.querySelectorAll('div');

const handleClick = function(e){
    // e.stopPropagation();

    setTimeout(() => {
        this.classList.add('clicked');
    }, e.currentTarget.dataset.time);    
}

divList.forEach((div, e) => {
    div.addEventListener('click', handleClick);
})


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