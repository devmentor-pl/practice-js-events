document.addEventListener('DOMContentLoaded',init);

function init(){
    const divEl = document.querySelector('div');
    if(divEl){
        divEl.addEventListener('mousemove', function(e){
            console.log('x: ' + e.x + ' | y: ' + e.y);
        });
        divEl.addEventListener('mouseleave', function(){
           console.log('jesteś poza elementem!'); 
        });
    }
}