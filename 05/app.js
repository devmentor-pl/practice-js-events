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
const aList = document.querySelectorAll('a');

pList.forEach(function(element){
    element.addEventListener('click', function(e){
        if(e.target.tagName === 'P'){
            const id = e.target.dataset.id;
            // console.log(id);
            if(!stats.paragraphs[id]){
                stats.paragraphs[id] = 0;
            }
            stats.paragraphs[id]++;
        }
    })
})

const linkStop = function(e){
    e.preventDefault();
    if(e.target.tagName === 'A'){
        const getHref = this.getAttribute('href');
        // console.log(getHref);
        if(!stats.links[getHref]){
            stats.links[getHref] = 0;
        }
        stats.links[getHref]++;
    }
}

aList.forEach(function(element){
    element.addEventListener('click',linkStop);
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

