

const eventMouseOut = function(){
   
    const text = 'Mouse has left div';
    this.innerText=text;
    console.log(text);
}

const getMousePos = function(e){
    const text = `Mouse position x = ${e.pageX}, y = ${e.pageY}`
    this.innerText=text;
    console.log(text);
}


const initApp = function(){
    
    const el = document.querySelector('div');

    el.addEventListener('mouseout', eventMouseOut);
    el.addEventListener('mousemove', getMousePos);
}

document.addEventListener('DOMContentLoaded',initApp);