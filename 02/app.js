const div = document.querySelector('div');

const actionOnDiv = () => {
    console.log('action on div');
    
}

const leavingDiv = () => {
    console.log('leaving div');
}

div.addEventListener('mouseover', actionOnDiv)

div.addEventListener('mouseleave', leavingDiv)