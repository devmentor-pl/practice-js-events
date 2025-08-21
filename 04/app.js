//1

const allDivs = document.querySelectorAll('div')

const addClass = function (element) {
    element.addEventListener('click', function () {
        
        //3
        const time = element.dataset.time

        setTimeout(function(){
            element.classList.add('clicked')
        }, time)
    // element.addEventListener('click', function(event){
    //     event.currentTarget.classList.add('clicked');
    })
}

allDivs.forEach(addClass)


//2

const body = document.querySelector('body');

const removeClass = function () {
    body.addEventListener('click', function (event) {
        if (event.target === event.currentTarget) {
            allDivs.forEach(function(div) {
                div.classList.remove('clicked');
            })
        }
    })
}

removeClass();

