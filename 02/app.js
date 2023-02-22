const init = function() {
 const div = document.querySelector('div');
 div.addEventListener('mousemove', onMove);
 div.addEventListener('mouseleave', onLeave);
 let counter = 0;
 function onMove() {
    counter++;
    div.textContent += `${counter} mousemove `;
 }
 function onLeave() {
    div.textContent = 'leave';
 }
}
document.addEventListener('DOMContentLoaded', init);

