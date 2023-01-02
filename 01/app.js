
const simpleClick = function() {
    console.log('clicked')
}
const button = document.querySelector('button');
if(button) {
    button.addEventListener('click', simpleClick)
}


// lub
// const button = document.querySelector('button');
// if(!button) {
//     return
// }
// button.addEventListener('click', simpleClick)