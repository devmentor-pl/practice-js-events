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
const linksList = document.querySelectorAll('.link');
const textList = document.querySelectorAll('.text');

const clickCounter = function(e) {
    const className = e.target.className;
    e.preventDefault();
    console.log(className);
    if(className === 'text'){
        if(typeof stats.paragraphs[e.target.dataset.id] === 'undefined'){
            stats.paragraphs[e.target.dataset.id] = 1;
        }
        else {
            stats.paragraphs[e.target.dataset.id]++;
        }
    }
    if(className === 'link'){       
        const hrefAttr = e.target.getAttribute('href');
        if(typeof stats.links[hrefAttr] === 'undefined') {
            stats.links[hrefAttr] = 1;
        }
        else {
            stats.links[hrefAttr]++;
        }
    }
}

pList.forEach(function(item){
    item.addEventListener('click', clickCounter);
});



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

