const divElmenet = document.querySelector('div');
const spaceForInfo = document.createElement('p');

divElmenet.parentElement.insertBefore(spaceForInfo, divElmenet);


divElmenet.addEventListener('mouseover', (e) =>{
    spaceForInfo.textContent = 'mouseover działa';
})

divElmenet.addEventListener('mouseout', (e) =>{
    spaceForInfo.textContent = 'mouseout też działa';
})