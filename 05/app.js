const stats = {
	paragraphs: {
		p1: 0,
	},
	links: {
		'/dolor.html': 0,
	},
}

/* tutaj umieść swój kod */
const pList = document.querySelectorAll('p[data-id]')

pList.forEach(function (p) {
	p.addEventListener('click', function (e) {
		e.preventDefault()

		const elem = e.target
		const tagName = e.target.tagName
		const changeStats = (data, key) => {
			if (typeof data[key] === 'undefined') {
				data[key] = 1
			} else {
				data[key]++
			}
		}

		if (tagName === 'P') {
			const id = elem.dataset.id
			const data = stats.paragraphs

			changeStats(data, id)
		}

		if (tagName === 'A') {
			const dataLink = stats.links
			const href = elem.getAttribute('href')
			console.log(href)

			changeStats(dataLink, href)
		}
	})
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
