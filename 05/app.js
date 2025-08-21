const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const clickStatsHandler = {
    incrementStat: (cat, key) => stats[cat][key] = (stats[cat][key] || 0) + 1,
    updateParagraphStats: p => clickStatsHandler.incrementStat('paragraphs', p.dataset.id),
    updateLinkStats: (l, e) => (e.preventDefault(), clickStatsHandler.incrementStat('links', l.getAttribute('href'))),
    handleClick: e => (e.target.tagName === "A" && clickStatsHandler.updateLinkStats(e.target, e), clickStatsHandler.updateParagraphStats(e.currentTarget))
};

document.querySelectorAll("p.text").forEach(p => p.addEventListener("click", clickStatsHandler.handleClick));

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

