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
    if(clickEvent.currentTarget.tagName==='P'){
        handleParagraph(clickEvent.currentTarget);
    }
    handleAnchor(clickEvent);
}

function handleParagraph (clickedParagraph) {
    const idOfClicked = clickedParagraph.dataset.id;
    checkAndAdd(idOfClicked, 'paragraphs');
}

function handleAnchor(e) {
    const clickedAnchor = e.target;
    if(clickedAnchor.tagName==='A') {
        e.preventDefault();
        const address= clickedAnchor.getAttribute('href');
        checkAndAdd(address, 'links');
    }
}

function checkAndAdd(attribute, subObject) {
    if(typeof stats[subObject][attribute]!== 'undefined'){
        stats[subObject][attribute]+=1; 
    } else {
        stats[subObject][attribute]=1; 
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

