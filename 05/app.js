const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
};

/* tutaj umieść swój kod */
const pElems = document.querySelectorAll('p');

pElems.forEach(pElem => {
	pElem.addEventListener('click', function (e) {
		if (e.target.tagName === 'A') {
			const href = e.target.getAttribute('href');
			if (stats.links[href]) {
				stats.links[href]++;
			} else {
				stats.links[href] = 1;
			}
			e.preventDefault();
		} else if (e.target.tagName === 'P') {
			const id = e.target.dataset.id;
			if (stats.paragraphs[id]) {
				stats.paragraphs[id]++;
			} else {
				stats.paragraphs[id] = 1;
			}
		}
	});
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
	// console.log(element, '=>', name);

	const event = new CustomEvent(name, {
		bubbles: true,
	});

	element.dispatchEvent(event);
};

const renderStats = function (data, element) {
	let html = '';
	for (let elementType in data) {
		html += '<ul>';

		for (let key in data[elementType]) {
			html += '<li>';
			html += key + ' -> ' + data[elementType][key];
			html += '</li>';
		}

		html += '</ul>';
	}

	element.innerHTML = html;
};

document.addEventListener('click', function (e) {
	const tagName = e.target.tagName;
	if (tagName.includes('P') || tagName.includes('A')) {
		fireCustomEvent(statsElement, 'render');
	}
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));
