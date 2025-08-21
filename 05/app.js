const stats = {
    paragraphs: {
        'p1': 0,
        'p2': 0,
        'p3': 0,
    },
    links: {
        '/dolor.html': 0,
        '/consectetur.html': 0,
        '/adipisicing-elite.html': 0,
    }
};

/* tutaj umieść swój kod */


// Nasłuchiwanie kliknięć na całej stronie
document.addEventListener('click', function(e) {
    
    // Pobierz element na którym nastąpiło kliknięcie
    const clickedElement = e.target;

    // Obsługa kliknięć w linki
    if (clickedElement.tagName === 'A' && clickedElement.classList.contains('link')) {
        e.preventDefault(); // Zapobiegaj przeładowaniu strony
        
        // Odczytaj wartość atrybutu 'href' z klikniętego elementu.
        const href = clickedElement.getAttribute('href');
        
        // Sprawdź czy link znajduje się w obiekcie stats.link
        if (stats.links.hasOwnProperty(href)) {
            
            // Zwiększ licznik kliknięć dla danego linku
            stats.links[href]++;
            
            // Wywołaj funkcję fireCustomEvent, wysyłając zdarzenie 'render' na elemencie .stats
            fireCustomEvent(statsElement, 'render');
        }
    }

    // Obsługa kliknięć w paragrafy.
    if (clickedElement.tagName === 'P' && clickedElement.classList.contains('text')) {
        const dataId = clickedElement.dataset.id;
        
        // Sprawdź, czy paragraf znajduje się w obiekcie stats.paragraphs
        if (stats.paragraphs.hasOwnProperty(dataId)) {
            
            // Zwiększ licznik kliknięć dla danego paragrafu
            stats.paragraphs[dataId]++;
            
            // Wywołaj funkcję fireCustomEvent, wysyłajac zdarzenie 'render' na elemencie .stats
            fireCustomEvent(statsElement, 'render');
        }
    }
});
/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

// Wyszukaj element o klasie .stats
const statsElement = document.querySelector('.stats');

// Funkcja przyjmuję dwa parametry, element na którym zostanie wywołane 
// zdarzenie, oraz name - nazwe zdarzenia ktore ma zostac wywołane.
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    // Utwórz zdarzenie za pomocą konstruktora 'CustomEvent' z parametrem 'name'.
    const event = new CustomEvent(name, {
        
        // Ustaw bubbles na true, co oznacza że zdarzenie będzie miało zdolność "wzbijania się" 
        // w hierarchii elementów.
        bubbles: true,
    });

    // Wysłanie zdarzenia do elementu.
    element.dispatchEvent( event );
}


const renderStats = function(data, element) {
    // Utwórz pusty ciąg znaków w zmiennej html.
    let html = '';
    
    // Iteruj po kluczach obiektu data.
    for(let elementType in data) {
        
        // Dodaj tag otwierający <ul> do ciągu HTML.
        html += '<ul>';

        // Iteruj po kluczach obiektu wewnątrz obiektu data.
        for(let key in data[elementType]) {
            
            // Dodaj tag otwierający <li> do ciągu HTML.
            html += '<li>';
            
            // Dodaj tekst do ciągu HTML, zawierający klucz i wartośc z obiektu data
            html += key + ' -> ' + data[elementType][key];
            
            // Dodaj tag zamykający </li> do ciągu HTML.
            html += '</li>';
        }
        
        // Dodaj tag zamykający </ul> do ciągu HTML.
        html += '</ul>'
    }
    // Ustaw zawartość elementu DOM (przekazanego jako parametr) na stworzony ciąg HTML.
    element.innerHTML = html;
}

// Obsługa zdarzeń kliknięcia na stronie
document.addEventListener('click', function(e) {
    
    // Pobierz nazwę tagu klikniętego elementu.
    const tagName = e.target.tagName;
    
    // Sprawdź czy kliknięty element to <p> lub <a>.
    if(tagName.includes('P') || tagName.includes('A')) {
        
        // Wywołaj funkcję fireCustomEvent, wysyłając zdarzenie 'render' na elemencie .stats
        fireCustomEvent(statsElement, 'render');
    }
});

// Nasłuchuj zdarzenia 'render' na elemencie .stats
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));

// Nasłuchuj zdarzenia 'DOMContentLoaded', które jest wywoływane po załadowaniu całej strony
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

