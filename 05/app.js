const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */


/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const pList = document.querySelectorAll('p')
console.log(pList)
const click = function(e){
    e.preventDefault();
    const id = e.currentTarget.dataset.id
    
    if(stats.paragraphs[id]){
        stats.paragraphs[id]++
    }
    else{
        stats.paragraphs[id] = 1;
    }

    const i= e.target.getAttribute('href')
    //console.log(i)
    stats.links[i]++
    if(!stats.links[i])
    {
        stats.links[i] = 1
    }
    
}

pList.forEach(function(el)
{
    el.addEventListener('click', click)
    
})

/*const aList = document.querySelectorAll('a')
console.log(aList)
aList.forEach(function(el){
    const href= el.getAttribute('href')
})*/

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
document.addEventListener('DOMContentLoaded', fireCustomEvent(statsElement, 'render'));

