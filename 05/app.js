const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('click', function(event) {
        if(event.target.classList.contains('link')) {
            event.preventDefault()
            const linkHref  = event.target.getAttribute('href')


            if(!stats.links.hasOwnProperty(linkHref)) {
                stats.links[linkHref] = 0
            }

            stats.links[linkHref]++

        } else if (event.target.classList.contains('text')) {
            const paragraphId = event.target.dataset.id 
            
            if(!stats.paragraphs.hasOwnProperty(paragraphId)) {
                stats.paragraphs[paragraphId] = 0;
            }

            stats.paragraphs[paragraphId]++ 
        } else {
            if(event.target.parentElement.classList.contains('text')) {
                const paragraphId = event.target.parentElement.dataset.id 
                
                stats.paragraphs[paragraphId]++}
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

