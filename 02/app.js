

document.addEventListener('DOMContentLoaded',initApp);

function initApp(){
    
    const el = document.querySelector('div');

    if (el){
        el.addEventListener('mouseout', eventMouseOut);
        el.addEventListener('mousemove', getMousePos);
    }
}

function eventMouseOut(e){
   
    const text = 'Mouse has left div';
    this.innerText = text;
    console.log(text);
}

function getMousePos(e){
    const text = `Mouse position x = ${e.pageX}, y = ${e.pageY}`
    this.innerText = text;
    console.log(text);
}