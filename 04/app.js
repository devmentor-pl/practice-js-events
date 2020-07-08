const divElement = document.querySelectorAll('div');
console.log(divElement)


// setTimeout(function addClass(e) {
//     if (e.target === e.currentTarget) {
//         e.currentTarget.classList.add('clicked');
//     }
// }, 5000)


// function addClass(e) {
//     if (e.target === e.currentTarget) {
//         e.currentTarget.classList.add('clicked');
//     }
// }
// setTimeout(addClass, 10000)



const body = document.querySelector('body');
console.log(body)


const time = document.querySelectorAll('[data-time]');
console.log(time);




const addClass = function (e) {
    if (e.target === e.currentTarget) {
        const self = this;
        setTimeout(function () {
            self.classList.add('clicked');
        }, this.dataset.time);

    }

}

divElement.forEach(function (e) {
    e.addEventListener('click', addClass)
});


const deleteClass = function (e) {
    // console.log(this.tagName)
    if (e.target === e.currentTarget) {
        divElement.forEach(function (item) {

            item.classList.remove('clicked');
            console.log('kliknęłam body i usunęłam klasę clicked z divów')
        })
    }
}
body.addEventListener('click', deleteClass)