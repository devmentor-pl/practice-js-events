const btnsList = document.querySelectorAll('button');
console.log(btnsList);

const handleClick = function() {   
    this.innerText = 'clicked';
    console.log('clicked');
    btnsList.forEach(function(item){
        if(item.innerText === 'clicked'){
            item.removeEventListener('click', handleClick);       
        }
    });
}

btnsList.forEach(function(item){
    item.addEventListener('click', handleClick);
});