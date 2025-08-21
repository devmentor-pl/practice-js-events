const divs  = document.querySelectorAll('div');

// 04.01
// const addClass = function(e) {
//     this.classList.add('clicked');
//     e.stopPropagation();
// }

// divs.forEach(function(item){
//     item.addEventListener('click', addClass);
// })

// 04.02
// const removeClass = function() {
//     divs.forEach(function(item){
//         item.classList.remove('clicked');
//     })
// }
// document.body.addEventListener('click', removeClass)

//04.03
const addDelayClass = function(e) {
    let tempTime = this.dataset.time;
    setTimeout(() => {
        this.classList.add('clicked');
    }, tempTime);
}

divs.forEach(function(item) {
    
    item.addEventListener('click', addDelayClass);
})
