const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

//na spotkanku mam kilka pytań odośnie tego zadania :). Podejrzewam ze i tak do poprawy :<

const linkElement = document.querySelectorAll('.link');
const paragraphElement = document.querySelectorAll('.text');
let numberP1 = 1;
let clickParagaphCounter = 1;
let counter = 1;

const clickCounter = function(){

    if (this.dataset.id === 'p1'){
        stats.paragraphs.p1 = numberP1++;
    }
    console.log('Paragraf naciśnięty: ' + clickParagaphCounter++);
}

// console.log(stats.paragraphs.p1);
// console.log(stats.links["/dolor.html"]);


for (let i=0; i<linkElement.length; i++){

    let number = 1;

    if (linkElement[i].href !== null) {
        let attribute = linkElement[i].getAttribute('href');
        
        linkElement[i].addEventListener('click', function(el) {
            
            if(attribute === '/dolor.html') {
                el.preventDefault();
                
                // console.log(counter);
                // counter++;
                stats.links["/dolor.html"] = counter++;
            }
            else {
                el.preventDefault();
                console.log('Atrybut: ' + attribute + ' naciśnięty po raz ' + number++);
            }
        });
    }
}                            

paragraphElement.forEach(function(item){

    if(item.dataset !==null) {
        item.addEventListener('click', clickCounter, true);
    }
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

