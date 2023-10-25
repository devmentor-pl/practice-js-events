const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
}

/* tutaj umieść swój kod */

const paragraphsList = document.querySelectorAll('p')

const calculateClicks = function (element) {
	element.addEventListener('click', function (e) {
		if (e.target.tagName === 'P') {
			if (typeof stats.paragraphs[e.target.dataset.id] === 'undefined') {
				stats.paragraphs[e.target.dataset.id] = 0
			}
			stats.paragraphs[e.target.dataset.id] = stats.paragraphs[e.target.dataset.id] + 1
		} else if (e.target.tagName === 'A') {
			e.preventDefault()
			if (typeof stats.links[e.target.getAttribute('href')] === 'undefined') {
				stats.links[e.target.getAttribute('href')] = 0
			}
			stats.links[e.target.getAttribute('href')] = stats.links[e.target.getAttribute('href')] + 1
		}
	})
}

paragraphsList.forEach(item => {
	calculateClicks(item)
})

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats')

const fireCustomEvent = function (element, name) {
	console.log(element, '=>', name)

	const event = new CustomEvent(name, {
		bubbles: true,
	})

	element.dispatchEvent(event)
}

const renderStats = function (data, element) {
	let html = ''
	for (let elementType in data) {
		html += '<ul>'

		for (let key in data[elementType]) {
			html += '<li>'
			html += key + ' -> ' + data[elementType][key]
			html += '</li>'
		}

		html += '</ul>'
	}

	element.innerHTML = html
}

document.addEventListener('click', function (e) {
	const tagName = e.target.tagName
	if (tagName.includes('P') || tagName.includes('A')) {
		fireCustomEvent(statsElement, 'render')
	}
})

statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement))

document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'))
