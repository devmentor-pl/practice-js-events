const divList = document.querySelectorAll('div')
const body = document.querySelector('body');

function handleClick() {
    this.classList.add('clicked')
};

divList.forEach(function(element) {
    element.addEventListener(
        'click',
        handleClick
    )
    
});

body.addEventListener(
        'click',
        subtractionClass
);
            
function subtractionClass(e) {
    if(e.target === e.currentTarget) {
        divList.forEach(function(element) {
            element.classList.remove('clicked')
        })
    }
};
            
            
