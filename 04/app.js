document.addEventListener('DOMContentLoaded', function(){
   const divElements = document.querySelectorAll('div');
   divElements.forEach(function(div){
    div.addEventListener('click',function(e){
        e.stopPropagation();
        const clickedDiv = e.currentTarget;
        clickedDiv.classList.add('clicked');
        if (Array.from(clickedDiv.classList).includes('child')) {
            changeColor(clickedDiv);
        }
    })
   })
   const bodyElement = document.querySelector('body');
   bodyElement.addEventListener('click',function(){
        divElements.forEach(function(div){
            div.classList.remove('clicked');
    });
});
   function changeColor(div){
    const delay = parseInt(div.dataset.time, 10);
    setTimeout(function() {
        div.classList.add('clicked');
    }, delay);
    const parent = div.parentElement.closest('div');
    if (parent) {
        changeColor(parent);
    
    }
   }
})

