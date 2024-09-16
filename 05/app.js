const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(paragraph){
    paragraph.addEventListener("click",function(e){
        e.preventDefault();
        const target = e.target;
        const currentTarget = e.currentTarget;
        // console.log("e.target: ",e.target)
        // console.log("e.currentTarget: ",e.currentTarget)
        
        if(target.tagName === "A"){
            if(!stats.paragraphs[currentTarget.dataset.id]){
                stats.paragraphs[currentTarget.dataset.id] = 0;
            } 
            if(!stats.links[target.getAttribute("href")]) {
                stats.links[target.getAttribute("href")] = 0;
            }
            stats.paragraphs[currentTarget.dataset.id] ++;
            stats.links[target.getAttribute("href")] ++;
        } else{
            if(!stats.paragraphs[currentTarget.dataset.id]){
                stats.paragraphs[currentTarget.dataset.id] = 0;
            }
            stats.paragraphs[currentTarget.dataset.id] ++;
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
    // console.log(this)
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

