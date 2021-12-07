
// const div = document.querySelector('div');

const ready = function(){
    const div = document.querySelector('div');
    if(div){
        div.addEventListener('mousemove', mouseMove);
        div.addEventListener('mouseleave', mouseLeave);
    }
}

window.addEventListener('DOMContentLoaded', ready);

mouseMove = function(){
    console.log('you are inside the div');
}

mouseLeave = function(){
    console.log('you left the div');
}


