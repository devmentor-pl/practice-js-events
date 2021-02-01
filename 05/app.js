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

const getId = function (e) {
    console.log(e.target.tagName)
    const id = this.dataset.id;

    if (e.target.tagName === 'P') {
        if (typeof stats.paragraphs[id] === 'undefined') {
            stats.paragraphs[id] = 0;

        }
        ++stats.paragraphs[id];
    }
}

pList.forEach(function (e) {
    e.addEventListener('click', getId);
})






const linkList = document.querySelectorAll('a');

const getHref = function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    if (e.target.tagName === 'A') {
        if (typeof stats.links[href] === 'undefined') {
            stats.links[href] = 0;

        }
        ++stats.links[href];
    }
}

linkList.forEach(function (item) {
    item.addEventListener('click', getHref);
});



/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '= >', name);

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

