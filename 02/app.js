const divFinder = function(){
const div = document.querySelector('div');
//console.log('a')
const mouseOnDiv = function()
    {
        console.log('myszka najechała na div');
    }
    div.addEventListener('mouseenter', mouseOnDiv);

const mouseOutDiv = function()
    {
        console.log('myszka jest poza div');
    }
    div.addEventListener('mouseleave', mouseOutDiv);
}

document.addEventListener('DOMContentLoaded', divFinder);



/*const mouseOnDiv = function()
{
    console.log('myszka najechała na div')
}

const mouseOutDiv = function()
{
    console.log('myszka jest poza div')
}

document.addEventListener('mouseenter', divFinder)
document.addEventListener('mouseleave', mouseOutDiv)*/