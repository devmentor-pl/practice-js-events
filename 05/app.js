// const stats = {
//     paragraphs: {
//         'p1': 0,
//     },
//     links: {
//         '/dolor.html': 0,
//     }
// };

// /* tutaj umieść swój kod */
// const paragraph = document.querySelectorAll('p')

// paragraph.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         console.log('ok');

//         e.preventDefault()
//         // console.log(e.target, e.currentTarget);

//         const tag = e.target.tagName
//         if (tag === 'P') {
//             const id = e.target.dataset.id
//             if (!stats.paragraphs[id]) {
//                 stats.paragraphs[id] = 0
//             } 
//             stats.paragraphs[id] = stats.paragraphs[id] +1
//         } else {

//             const href = e.target.getAttribute('href')
//             stats.links[href] = stats.links[href] + 1
//             if (!stats.links[href]) {
//                 stats.links[href] = 0
//             }
//             console.log(href);
//         }
//         console.log(tag);
//         // stats.paragraphs.p1 = stats.paragraphs.p1 +1
//     })
// })

// /* nie modyfikuj kodu poniżej, ale przeanalizuj go */

// const statsElement = document.querySelector('.stats');
// const fireCustomEvent = function(element, name) {
//     console.log(element, '=>', name);

//     const event = new CustomEvent(name, {
//         bubbles: true,
//     });

//     element.dispatchEvent( event );
// }

// const renderStats = function(data, element) {
//     let html = '';
//     for(let elementType in data) {
//         html += '<ul>';

//         for(let key in data[elementType]) {
            
//             html += '<li>';
//             html += key + ' -> ' + data[elementType][key];
//             html += '</li>';
//         }

//         html += '</ul>'
//     }

//     element.innerHTML = html;
// }


// document.addEventListener('click', function(e) {
//     const tagName = e.target.tagName;
//     if(tagName.includes('P') || tagName.includes('A')) {
//         fireCustomEvent(statsElement, 'render');
//     }
// });
// statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
// document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

function test(num) {
    console.log(this);
    console.log(num);
}

const copy = test.bind('cos tam', 24)

copy()