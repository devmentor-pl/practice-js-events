
const simpleClick = function() {
    console.log('clicked')
}
const button = document.querySelector('button');
if(button) {
    button.addEventListener('click', simpleClick)
}

//funkcja anonimowa: 
// const button = document.querySelector('button');
// if(button) {
//     button.addEventListener('click', function() {
//         console.log('clicked')
//     })
// }