const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const paragraphElements = document.querySelectorAll('p')
const anchorElements = document.querySelectorAll('a')

const paragraphArray = [...paragraphElements]

paragraphArray.forEach(function(item){
    const paragraphID = item.dataset.id
    stats.paragraphs[paragraphID] = 0
})

const linkClickCounter = function(link){
    const linkElement = link.getAttribute('href')
    if(linkElement === '/dolor.html'){
        link.addEventListener('click', function(e){
            stats.links["/dolor.html"]++
            
            paragraphArray.forEach(function(item){
                item.removeEventListener('click', paragraphClickCounter)
            })
            e.preventDefault();
        })
    }
}

const paragraphClickCounter = function(paragraph){
    paragraph.addEventListener('click', function(){
        const id = paragraph.dataset.id
        stats.paragraphs[id]++
    })
}

paragraphArray.forEach(paragraphClickCounter)
anchorElements.forEach(linkClickCounter)

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

