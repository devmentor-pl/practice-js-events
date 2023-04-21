const divElement = document.querySelector('div')

divElement.addEventListener('mousemove', function (e) { 
    console.log('Mouse over div');
})

divElement.addEventListener('mouseout', function (e) {
    console.log('Out of the div');
})
