const divElement = document.querySelectorAll('div');
console.log(divElement)


const addClass = function () {

    this.classList.add('clicked');

}

divElement.forEach(function (item) {
    item.addEventListener('click', addClass)
})


//*//



const body = document.querySelector('body');
console.log(body)


const time = document.querySelectorAll('[data-time]');
console.log(time);


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