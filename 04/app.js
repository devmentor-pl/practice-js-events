const divList = document.querySelectorAll('div');

// #01
const addClass = function (e) {
    e.currentTarget.classList.add('clicked')
    e.stopPropagation()
}

// divList.forEach(function (item) {
//     item.addEventListener('click', addClass);
// })

// #02

const bodyElement = document.querySelector('body')

const removeClass = function (e) {
    if (!e.target.closest('div')) {
        divList.forEach(function (div) {
            div.classList.remove('clicked')
        })
    }
}

bodyElement.addEventListener('click', removeClass)

// #03

const addClassTimeout = function(element, delay) {
    setTimeout(function(){
        element.classList.add('clicked')
    }, delay);
}

const changeBgColor = function(e) {
    e.stopPropagation();
    const timeStamp = Number(this.dataset.time);

    if (this.classList.contains('child')) {
        let currentElement = this;
        
        while (currentElement) {
            if (currentElement.tagName.toLowerCase() === 'div') {
                const timeStamp = Number(currentElement.dataset.time);
                addClassTimeout(currentElement, timeStamp);
            }
            currentElement = currentElement.parentElement;
        }
    } else {
        addClassTimeout(this, timeStamp);
    }
}

divList.forEach(function(div){
    div.addEventListener('click', changeBgColor)
})