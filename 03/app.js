const btnsList = document.querySelectorAll('button');
console.log(btnsList);

const handleClick = function() {   
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', handleClick);       
}

btnsList.forEach(function(item){
    item.addEventListener('click', handleClick);
});