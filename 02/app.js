const divElement = document.querySelector('div')

console.log(divElement);

const moveEvent  = () => {
    console.log('Mouse move event');
}

const leaveElementEvent = () => {
    console.log('Leave element event');
}

divElement.addEventListener('mousemove', moveEvent)
divElement.addEventListener('mouseleave', leaveElementEvent)