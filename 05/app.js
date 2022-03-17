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

const isInStats = function(data, key){

    if (typeof data[key] === 'undefined'){
        return false;
    }
    else{
        return true;
    }
}

const increaseQty = function(data, key){
    
    data[key]++;
}

const newItemToStats = function(data, key){

    data[key]=1;
    
}

const  updateStats = function (data,key){
    
    if (isInStats(data,key)) {
        increaseQty(data, key);
    }
    else{        
        newItemToStats(data,key);
    }
}

const pClickEvent = function(data, e){
        
    updateStats(data.paragraphs,e.currentTarget.dataset.id);   

    if (e.target !== e.currentTarget) {              
        e.preventDefault();              
        updateStats(data.links, e.target.getAttribute('href'));
    }        
}

pList.forEach(function(p){    
    p.addEventListener('click', pClickEvent.bind(null,stats))  // tutaj też może troche na siłę "bind" ale chciałem poćwiczyć 
});


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