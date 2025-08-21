
// 04.01

const getDivs = document.querySelectorAll('div')

const addClass = function(){
    this.classList.add('clicked');
}

// getDivs.forEach(function(item){
//     item.addEventListener('click', addClass);
// });

// 04.02

const getBody = document.querySelector('body');

const removeClass = function(e){
    if(e.target === e.currentTarget){
    getDivs.forEach(function(item){
        item.classList.remove('clicked')
    })
    }
}

getBody.addEventListener('click', removeClass);

// 04.03

getDivs.forEach(function(item){
    item.addEventListener('click', function(){

    const time = item.dataset.time;

        setTimeout(function(){
            item.classList.add('clicked');
        }, time)})
})
