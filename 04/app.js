const divEl = document.querySelectorAll('div');

function addClicked(event){
    event.target.classList.add('clicked');
}

divEl.forEach(element => {
    element.addEventListener('click', addClicked)
});

const bodyTarget = document.querySelector('body');
document.body.addEventListener('click', (e) => {
    if(e.target == bodyTarget){
    divEl.forEach(element => {
            element.classList.remove('clicked');
    });
    }
})

const timeData = document.querySelectorAll('[data-time]');
const childEl = document.querySelector('.child');



let timeoutData = 0;
// timeData.forEach(element => {
//    timeoutData = element.dataset.time;
//     childEl.addEventListener('click', (e) => {
//         divEl.forEach(element => {
//             setTimeout(() => {
//                 element.classList.add('clicked');
//             }, timeoutData);
//         });
//     })
// });


childEl.addEventListener('click', (e) => {
    timeData.forEach(element => {
        setTimeout(() => {
            element.classList.add('clicked');
        }, element.dataset.time)
    });
});