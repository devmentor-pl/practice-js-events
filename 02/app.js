const div = document.querySelector('div');

if(div) {
    div.addEventListener('mousemove', onMouseMove);
    div.addEventListener('mouseleave', onMouseLeave);   
}


function onMouseMove() {
    console.log('Jestem wewnątrz');
}

function onMouseLeave() {
    console.log('Jestem na zewnątrz');
}