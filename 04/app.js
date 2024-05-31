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

// #03 domyslam sie ze powinienem wykorzystac propagacje ale nie moglem sobie z tym poradzic

const addClassTimeout = function(element, delay) {
    setTimeout(function(){
        element.classList.add('clicked')
    }, delay);
}

const changeBgColor = function(e) {
    thisVariable = this;
    const timeStamp = Number(this.dataset.time);
    addClassTimeout(thisVariable, timeStamp);
}

divList.forEach(function(div){
    div.addEventListener('click', changeBgColor)
})