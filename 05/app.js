const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		"/dolor.html": 0,
	},
};

/* tutaj umieść swój kod */

// // Funkcja obsługująca kliknięcia w linki
// function handleLinkClick(event) {
//     event.preventDefault();

//     const linkHref = event.target.getAttribute('href');

//     if (linkHref && stats.links.hasOwnProperty(linkHref)) {
//         stats.links[linkHref]++;
//         updateStats();
//     }
// }

// // Funkcja obsługująca kliknięcia w paragrafy
// function handleParagraphClick(event) {
//     const paragraphId = event.target.dataset.id;

//     if (paragraphId && stats.paragraphs.hasOwnProperty(paragraphId)) {
//         stats.paragraphs[paragraphId]++;
//         updateStats();
//     }
// }

// // Funkcja aktualizująca widok na stronie
// function updateStats() {

//     console.log(stats);
// }

// // Nasłuchiwanie kliknięć w linki o klasie .link
// const linkElements = document.querySelectorAll('.link');
// linkElements.forEach(link => {
//     link.addEventListener('click', handleLinkClick);
// });

// // Nasłuchiwanie kliknięć w paragrafy o klasie .text
// const paragraphElements = document.querySelectorAll('.text');
// paragraphElements.forEach(paragraph => {
//     paragraph.addEventListener('click', handleParagraphClick);
// });

// ----------------------------------

// Funkcja obsługująca kliknięcia w paragrafy
function handleParagraphClick(event) {
	const tag = event.currentTarget.tagName;
	if (tag === "P") {
		const id = event.currentTarget.dataset.id;
		if (!stats.paragraphs[id]) {
			// jeśli nie istnieje to utwórz
			stats.paragraphs[id] = 0;
		}
		stats.paragraphs[id]++; // dodaj jeden
	} else {
		// kliknięto A
	}
}

// // Funkcja obsługująca kliknięcia w linki
// function handleLinkClick(event) {
// 	event.preventDefault(); // Zapobiega domyślnej akcji przekierowania przy kliknięciu w link

// 	const linkHref = event.currentTarget.getAttribute("href");

// 	if (linkHref && stats.links.hasOwnProperty(linkHref)) {
// 		stats.links[linkHref]++;
// 		updateStats();
// 	}
// }

// Funkcja aktualizująca widok na stronie
function updateStats() {
	console.log(stats);
}

// Nasłuchiwanie kliknięć w paragrafy o klasie .text
const paragraphElements = document.querySelectorAll(".text");
paragraphElements.forEach((paragraph) => {
	paragraph.addEventListener("click", handleParagraphClick);
});

// // Nasłuchiwanie kliknięć w linki o klasie .link
// const linkElements = document.querySelectorAll(".link");
// linkElements.forEach((link) => {
// 	link.addEventListener("click", handleLinkClick);
// });

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
	console.log(element, "=>", name);

	const event = new CustomEvent(name, {
		bubbles: true,
	});

	element.dispatchEvent(event);
};

const renderStats = function (data, element) {
	let html = "";
	for (let elementType in data) {
		html += "<ul>";

		for (let key in data[elementType]) {
			html += "<li>";
			html += key + " -> " + data[elementType][key];
			html += "</li>";
		}

		html += "</ul>";
	}

	element.innerHTML = html;
};

document.addEventListener("click", function (e) {
	const tagName = e.target.tagName;
	if (tagName.includes("P") || tagName.includes("A")) {
		fireCustomEvent(statsElement, "render");
	}
});
statsElement.addEventListener(
	"render",
	renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
	"DOMContentLoaded",
	fireCustomEvent.bind(null, statsElement, "render")
);
