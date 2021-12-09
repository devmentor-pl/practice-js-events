const divlist = document.querySelectorAll('div');
const bodyE = document.querySelector('body');

function addClass(temp){
    console.log(temp);
    temp.classList.add('clicked');
}

const removeClassFromDiv = function(e){
    if(e.target === bodyE){
    divlist.forEach(function(element){
        element.classList.remove('clicked');
        })
    }
}

divlist.forEach(function(element){
    const timeList = element.dataset.time;
    element.addEventListener('click',function(){
        const temp = this;
        setTimeout(addClass,timeList,temp);
    });
})

bodyE.addEventListener('click', removeClassFromDiv);

