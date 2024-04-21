const divElement = document.querySelector('div')

console.log(divElement);

const moveEvent  = () => {
    console.log('Moveover event');
}

const leaveElementEvent = () => {
    console.log('Leave element event');
}

divElement.addEventListener('mouseover', moveEvent)
divElement.addEventListener('mouseleave', leaveElementEvent)