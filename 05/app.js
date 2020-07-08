const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */



const allP = document.querySelectorAll('p');
console.log(allP)


const calculateClick = function (e) {


    e.preventDefault();
    const id = this.dataset.id;


    if (e.target.tagName === 'P') {

        if (typeof stats.paragraphs[id] === 'undefined') {
            stats.paragraphs[id] = 1;
        }
        stats.paragraphs[id]++;
    }

    const a = e.target.getAttribute('href');

    if (e.target.tagName === 'A') {

        if (typeof stats.links[a] === 'undefined') {
            stats.links[a] = 1;
        }
        stats.links[a]++;
    }
}






// if (e.target.tagName === 'P') {

//     if (typeof stats.paragraphs[id] === 'undefined') {
//         stats.paragraphs[id]++;

//     } else if (e.target.tagName === 'A') {
//         if (typeof stats.links[a] === 'undefined') {
//             stats.links[a] = 0;
//         }

//     }
// }








allP.forEach(function (item) {
    item.addEventListener('click', calculateClick)
})



/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
}

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {

            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent(statsElement, 'render'));