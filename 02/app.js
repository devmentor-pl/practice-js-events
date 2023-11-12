

const handleMousemove = function () {
    console.log('mouse is moving');
}
const handleMouseleave = function () {
    console.log('mouse left');
}



const init = function(){
    const div = document.querySelector('div');



if (div) {

    
    div.addEventListener('mousemove', handleMousemove);
    div.addEventListener('mouseleave', handleMouseleave);

}
}


document.addEventListener("DOMContentLoaded", init);
