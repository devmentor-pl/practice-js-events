//KONSULTACJE: 
//zlicza kliknięcia wewnątrz funkcji, ale ju poza nią nie ma dostępu do liczby kliknięć
//liczbę kliknięć poza funkcją podaje jako 0 jeszcze zanim kliknę i nie dodaje kliknięć
// stąd nie wiem, czy prawidłowo jest zrobione dodawanie do obiektu oraz do paragrafu?
// nasłuchujemy pElementList, więc linkEl nie jest potrzebny?

const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

// sumowanie kliknięć w paragraf o klasie .text (identyfikowany po dataset).
let clicks = 0;
const countClicks = function(event) { 
    if(event.target) {
        //zatrzymuję domyślną akcję (przeładowanie strony)
        event.preventDefault();
        // zliczam kliknięcia
        clicks ++;
    }
    console.log('liczba kliknięć wewnątrz funkcji: ', clicks); // zlicza prawidłowo
    return clicks;
}
console.log('liczba kliknięć poza funkcją: ', clicks, countClicks); // 0 - nie ma dostępu do liczby kliknięć BŁĄD!! - dodatkowa zmienna clicksNumber nic nie poprawia

for (const item in stats.paragraphs) {
    //sprawdzam jak dostać się do wnętrza
    console.log('właściwość => ', item, 'wartość => ', stats.paragraphs[item]); // p1 0
    // aktualizuję strukturę danych po kazdym kliknięciu
    stats.paragraphs[item] = clicks;
    stats.links[item] = clicks;
};

// tworzę paragraf, w którym będę sumowała kliknięcia
const newParagraph = document.createElement('p');
newParagraph.classList.add('text');
newParagraph.setAttribute('id', 'dataset');
newParagraph.innerText = clicks;
console.log(newParagraph);

// wyszukuję listę elementów <p>
const pElementList = document.querySelectorAll('p');

// sprawdzam, który <p> został kliknięty
pElementList.forEach(function(el) {
el.addEventListener("click", countClicks)
})

// to chyba NIE JEST POTRZEBNE?, 
// bo nasłuchujemy na <p> pElementList
// wyszukuję link o klasie href 
// const linkEl = document.querySelectorAll('a');
// console.log(linkEl);
// linkEl.forEach(function(el) {
//         const hrefList = el.hasAttribute('href');
//         console.log(hrefList); //6x true
//         return hrefList;
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

