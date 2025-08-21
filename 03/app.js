const buttonsEl = document.querySelectorAll('button');

console.log(buttonsEl[0]);


// buttonsEl.forEach(element => {
//     element.addEventListener('click', (e) => {
//         element.innerText = 'clicked';
//         console.log('clicked');
//         e.preventDefault();
//     })
// });

buttonsEl.forEach(element => {

    const handleClick = (e) => {
        element.innerText = 'clicked';
        console.log('clicked');
        element.removeEventListener('click', handleClick)
    } 

    element.addEventListener('click', handleClick);
});