const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll('p')

if(pElements){
    pElements.forEach(function(pEl){
        pEl.addEventListener('click',handleBoth)
    })
}

function handleBoth(e){
    const clickEvent = e;
    if(clickEvent.currentTarget.dataset.id==='p1'){
        increaseParCount();
        
    }
    handleAnchor(clickEvent);
}

function increaseParCount () {
    stats.paragraphs['p1']++;
}

function handleAnchor(e) {
    if(e.target.tagName==='A') {
        e.preventDefault();
        const address= e.target.getAttribute('href'); 
        if(address==="/dolor.html") {
            stats.links["/dolor.html"]++;
        }
    }
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

