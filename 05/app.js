const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
};

/* tutaj umieść swój kod */

const paragraphsArr = document.querySelectorAll('.text');
paragraphsArr.forEach((el) => {
	stats.paragraphs[el.getAttribute('data-id')] = 0;
	el.addEventListener('click', (e) => {
		if (el.getAttribute('data-id')) {
			stats.paragraphs[el.getAttribute('data-id')] += 1;
		} else {
			console.log('Provided attribute does not exist.');
		}
	});
});

const linksArr = document.querySelectorAll('a[href].link');
linksArr.forEach((el) => {
	stats.links[el.getAttribute('href')] = 0;
	el.addEventListener('click', (e) => {
		e.preventDefault();
		if (el.getAttribute('href')) {
			stats.links[el.getAttribute('href')] += 1;
		} else {
			console.log('Provided attribute does not exist.');
		}
	});
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
	console.log(element, '=>', name);

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
statsElement.addEventListener(
	'render',
	renderStats.bind(this, stats, statsElement)
);
document.addEventListener(
	'DOMContentLoaded',
	fireCustomEvent.bind(null, statsElement, 'render')
);
