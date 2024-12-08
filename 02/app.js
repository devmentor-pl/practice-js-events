document.addEventListener('DOMContentLoaded', function () {
    const div = document.querySelector('div');
    
    if(div){
        div.addEventListener('mousemove', function(){
            console.log('Hovering over the DIVelement');
        })
        div.addEventListener('mouseleave', function(){
            console.log('Cursor is moved out of the DIVelement');
        })
    }
});