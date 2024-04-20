const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const linkList = document.querySelectorAll('.link');
const textList = document.querySelectorAll('.text');
const testText = 'links';

const getHref = function(e) {
    e.preventDefault();
    if(typeof(stats.links[this.getAttribute('href')]) === 'number'){
        stats.links[this.getAttribute('href')] += 1;
    }
    else {
        stats.links[this.getAttribute('href')] = 0;
        stats.links[this.getAttribute('href')] += 1;
    }
}

linkList.forEach(function(element){
    element.addEventListener('click', getHref);
})

textList.forEach(function(element) {
    element.addEventListener('click', function() {
        if(typeof(stats.paragraphs[this.dataset.id]) === 'number'){
            stats.paragraphs[this.dataset.id] += 1;
        }
        else {
            stats.paragraphs[this.dataset.id] = 0;
            stats.paragraphs[this.dataset.id] += 1;
        }
    })
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

