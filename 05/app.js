const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const getParagraphs = document.querySelectorAll('.text');

const count = function(e) {
    
    if(e.target.tagName === 'P') {
        const getPId = e.target.dataset.id;

        (typeof stats.paragraphs[getPId] === 'undefined') ? (stats.paragraphs[getPId] = 0) : stats.paragraphs[getPId];


        stats.paragraphs[getPId]++;

    } else if (e.target.tagName === 'A') {
        e.preventDefault();
        const getAId = e.target.getAttribute('href');
        
        (typeof stats.links[getAId] === 'undefined') ? stats.links[getAId] = 0 : stats.links[getAId];

        stats.links[getAId]++
    }
}

getParagraphs.forEach(function(el){
    el.addEventListener('click', count);
})

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

