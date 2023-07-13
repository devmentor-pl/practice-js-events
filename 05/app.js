const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */



const pList = document.querySelectorAll('p');
const linkList = document.querySelectorAll('a');

pList.forEach(p => {
    const paragraphValue = p.dataset.id;
    
    if (typeof paragraphValue !== 'undefined') {
        stats.paragraphs[paragraphValue] = 0;
    }
    
})

linkList.forEach(link => {
    const linkValue = link.getAttribute('href');
    
    if (typeof linkValue !== 'undefined') {
        stats.links[linkValue] = 0;
    }
})

const onClick = function (e) {
    const el = e.target;
    if (el.hasAttributes('href')) {
        e.preventDefault();
    }
    
    if(el.dataset.id === 'p1') {
        ++stats.paragraphs.p1;
    }
    if(el.dataset.id === 'p2') {
        ++stats.paragraphs.p2;
    }
    if(el.dataset.id === 'p3') {
        ++stats.paragraphs.p3;
    }

    if(el.getAttribute('href') === '/dolor.html') {
        ++stats.links['/dolor.html'];
    }
    if(el.getAttribute('href') === '/adipisicing-elite.html') {
        ++stats.links['/adipisicing-elite.html'];
    }
    if(el.getAttribute('href') === '/consectetur.html') {
        ++stats.links['/consectetur.html'];
    }

    console.log(stats);
}


pList.forEach(p => {
    p.addEventListener('click', onClick);
});



/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    // console.log(element, '=>', name);

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

