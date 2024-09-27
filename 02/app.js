const init = function(){ 
    const div = document.querySelector('div');
    const moveOver = function(){
    div.textContent = 'move over';
    console.log('move over')
}
    const onLeave = function(){
    div.innerText = 'left div';
    console.log('left div')
}
if(div) {
    div.addEventListener('mouseover', moveOver)
    div.addEventListener('mouseleave', onLeave)
}}

document.addEventListener('DOMContentLoaded', init)
