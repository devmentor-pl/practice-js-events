document.addEventListener('DOMContentLoaded', function() {
    const divEl = document.querySelector('div');

    const mouseOverElement = function() {
        console.log('wskaźnik myszy znajduje się nad elementem');
    }

    const mouseLeavesElement = function() {
        console.log('wskaźnik myszy opuścił element');
    }

    if(divEl) {
        divEl.addEventListener('mouseover', mouseOverElement);
        divEl.addEventListener('mouseleave', mouseLeavesElement);
    }
})


