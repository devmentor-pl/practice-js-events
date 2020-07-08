const divElement = document.querySelectorAll('div');
console.log(divElement)


// const addClass = function () {

//     this.classList.add('clicked');

// }



// setTimeout(function addClass(e) {
//     if (e.target === e.currentTarget) {
//         e.currentTarget.classList.add('clicked');
//     }

// }, 5000)




function addClass(e) {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.add('clicked');
    }
}
setTimeout(addClass, 10000)


divElement.forEach(function (e) {
    e.addEventListener('click', addClass)
});




//*//



const body = document.querySelector('body');
console.log(body)



// const time = document.querySelectorAll('[data-time]');
// console.log(time);


// time.forEach(function (el) {
//     const timeItem = parseInt(el.dataset.time);
//     console.log(timeItem)
// })




const deleteClass = function (e) {
    // console.log(this.tagName)
    if (e.target === e.currentTarget) {
        divElement.forEach(function (item) {

            item.classList.remove('clicked');
            console.log('kliknęłam body i usunęłam klasę clicked z divów')
        })
    }

}

// body.addEventListener('click', setTimeout(deleteClass, 2000))
body.addEventListener('click', deleteClass)