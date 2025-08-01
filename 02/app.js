const divEl = document.querySelector('div');

const bodyEl = document.querySelector('body')

console.log(bodyEl)



const onMove = function (e) {
    // if (bodyEl) {
    //     const newParagraph = document.createElement('p');
    //     bodyEl.appendChild(newParagraph);
    //     if (newParagraph) {
    //         const spanElX = document.createElement('span')
    //         const spanElY = document.createElement('span')

    //         spanElX.textContent = 'x: ' + e.x;
    //         spanElY.textContent = 'y: ' + e.y;
    //         newParagraph.appendChild(spanElX)
    //         newParagraph.appendChild(spanElY)
    //     }
    // }
    console.log(e)
};

const onLeave = function (e) {
    // if (bodyEl) {
    //     const newParagraph = document.createElement('p');
    //     newParagraph.textContent = 'You are out of DIV';
    //     bodyEl.appendChild(newParagraph)

    // }
    console.log(e)
    console.log('You are out of DIV')
}

if (divEl) {
    divEl.addEventListener('mousemove', onMove);
    divEl.addEventListener('mouseleave', onLeave);
}