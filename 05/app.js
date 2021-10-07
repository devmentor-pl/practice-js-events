const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */


const pElement = document.querySelectorAll('p');

    pElement.forEach(el =>{
        console.log(el);
        el.addEventListener('click', function(ev){

            ev.preventDefault();

           
            if (ev.target.tagName === 'P') {

                const id = ev.target.dataset.id;
                console.log('p');
                console.log(id);

                if(typeof stats.paragraphs[id] === 'undefined') {
                    console.log('hm');
                    stats.paragraphs[id] =0;
                }

                stats.paragraphs[id]++;
                
            }
 
            else {

                const href = ev.target.getAttribute('href');

                if (typeof stats.links[href] === 'undefined'){
                    console.log('aund');
                    stats.links[href]= 0;
                }
                stats.links[href]++;         
            }
        });
    });





// const linkElement = document.querySelectorAll('.link');
// const paragraphElement = document.querySelectorAll('.text');
// let numberP1 = 1;
// let linkCounter = 1;
// let counter = 1;

// const clickCounter = function(el){

//     el.preventDefault();
//     // console.log(stats.paragraphs[this.dataset.id]);
//     console.log(this.dataset.id);

//     if (stats.paragraphs[this.dataset.id] !== 'undefined'){
//         stats.links["/dolor.html"] = counter++;
//         if(this.dataset.id === 'p1') {
//             stats.paragraphs.p1 = numberP1++;
//         }
//     }
    // console.log('Paragraf naciśnięty: ' + clickParagaphCounter++);
// }

// console.log(stats.paragraphs.p1);
// console.log(stats.links["/dolor.html"]);


// for (let i=0; i<linkElement.length; i++){
        
//     linkElement[i].addEventListener('click', function(el) {
//         el.preventDefault();
//         console.log('Link naciśnięty ' + linkCounter++ + ' raz');
//     });
// }
// paragraphElement.forEach(function(item){

//     if(item.dataset !==null) {
//         item.addEventListener('click', clickCounter);
//     }
// });


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

