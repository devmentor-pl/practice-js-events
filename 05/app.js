const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

let tagP = document.querySelectorAll('p');

for (let i = 0; i < tagP.length; i++) {
    const indexP = tagP[i].dataset.id;
    stats.paragraphs[indexP] = 0;

    let tagA = tagP[i].querySelectorAll('a');

    for (let j = 0; j < tagA.length; j++) {
        const indexA = tagA[j].getAttribute('href');
        stats.links[indexA] = 0;
        tagA[j].addEventListener('click', e => {
            stats.links[indexA]++;
        })
    }

    tagP[i].addEventListener('click', e => {
        e.preventDefault();
        stats.paragraphs[indexP]++;
    })
}

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent( event );
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {
        html += '<ul>';

        for(let key in data[elementType]) {
            
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function(e) {
    const tagName = e.target.tagName;
    if(tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

