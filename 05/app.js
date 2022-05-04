const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */


const paragraphsList = document.querySelectorAll('p');
console.log(paragraphsList);


paragraphsList.forEach(function (element) {

    element.addEventListener('click', function (e) {
        console.log(e);
        e.preventDefault();
        const idParagraph = e.target.dataset.id;
        console.log(idParagraph);
        const pLink = e.target.getAttribute('href');
        console.log(pLink);

        if (stats.paragraphs[idParagraph] === undefined) {
            stats.paragraphs[idParagraph] = 0;
        }

        if (e.target.tagName === 'P') {
            stats.paragraphs[idParagraph]++;

        }

        if(stats.links[pLink] === undefined){
            stats.links[pLink] = 0;
        }
        else if (e.target.tagName === 'A') {
            stats.links[pLink]++;
        }
    });

});




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
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

