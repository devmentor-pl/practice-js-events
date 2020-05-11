const btn = document.querySelector('button');
console.log(btn);

const clicked = function()
{
    console.log('clicked');
}

if(btn)
{
    btn.addEventListener('click', clicked );
}