const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElement = document.querySelectorAll('p');
const counter = function(e) {
    e.preventDefault();
    const link = e.target.getAttribute("href");
    const id = e.target.dataset.id;

    if(link === "/dolor.html") {
        stats.links['/dolor.html'] ++; 
    } else if (link === "/consectetur.html"){
        if(stats.links['/consectetur.html']) {
            stats.links['/consectetur.html'] ++;
        } else {
            stats.links['/consectetur.html'] = 1;
        }
    } else if (link === "/adipisicing-elite.html"){
        if(stats.links['/adipisicing-elite.html']) {
            stats.links['/adipisicing-elite.html'] ++;
        } else {
            stats.links['/adipisicing-elite.html'] = 1;
        }
    } else if (id) {
        stats.paragraphs.p1 ++;
    }
}

pElement.forEach(function(item) {
    item.addEventListener('click', counter);  
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

