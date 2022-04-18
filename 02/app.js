(function () {

    const mainDiv = document.querySelector('div');
    mainDiv.addEventListener("mousemove", e => console.log('move inside div'))
    mainDiv.addEventListener("mouseleave", e => console.log('coursor left'))

})()