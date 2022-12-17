const areaElement = document.querySelector('div');
if (areaElement) {
    areaElement.addEventListener('mouseenter' && 'mousemove', function () {

        console.log('mouse is on the area')
    })

    areaElement.addEventListener('mouseleave', function () {
        console.log('mouse is out of the area')
    })
}


