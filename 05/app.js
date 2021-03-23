const stats = {
	paragraphs: {
		p1: 0
	},
	links: {
		'/dolor.html': 0
	}
};

/* tutaj umieść swój kod */
document.querySelectorAll('[data-id]').forEach((p) => {
	if (p.getAttribute('data-id') === 'p1') {
		p.addEventListener('click', () => (stats.paragraphs.p1 = stats.paragraphs.p1 + 1));
	}
});
document.querySelectorAll('[href]').forEach((p) => {
	if (p.getAttribute('href') === '/dolor.html') {
		p.addEventListener('click', () => (stats.links['/dolor.html'] = stats.links['/dolor.html'] + 1));
	}
});
// console.log(xxx);

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
	console.log(element, '=>', name);

	const event = new CustomEvent(name, {
		bubbles: true
	});

	element.dispatchEvent(event);
};

const renderStats = function(data, element) {
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

document.addEventListener('click', function(e) {
	e.preventDefault();
	const tagName = e.target.tagName;
	if (tagName.includes('P') || tagName.includes('A')) {
		fireCustomEvent(statsElement, 'render');
	}
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));
