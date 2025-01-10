const btnsList = document.querySelectorAll('button');

const handleClick = (e) => {
    e.target.textContent = 'clicked';
    console.log('clicked');
    
    e.target.removeEventListener('click', handleClick);
};

btnsList.forEach( (btn) => {
    btn.addEventListener('click', handleClick);
});