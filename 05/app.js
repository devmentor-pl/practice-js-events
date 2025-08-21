/* stats przechowuje liczbę kliknięć dla każdego paragrafu oraz linku */
const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
}

/* tutaj umieść swój kod */
function incrementStat(stats, key) {
  if (!stats[key]) {
    stats[key] = 0
  }
  stats[key]++
}

document.querySelectorAll("p.text").forEach((paragraph) => {
  paragraph.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && e.target.classList.contains("link")) {
      const href = e.target.getAttribute("href")
      e.preventDefault()
      incrementStat(stats.links, href)
    }

    const dataId = this.getAttribute("data-id")
    incrementStat(stats.paragraphs, dataId)
  })
})

/* Old code */
// document.querySelectorAll("p.text").forEach((paragraph) => {
//   paragraph.addEventListener("click", function (e) {
//     if (e.target.tagName === "A" && e.target.classList.contains("link")) {
//       const href = e.target.getAttribute("href")
//       e.preventDefault()
//       if (!stats.links[href]) {
//         stats.links[href] = 0
//       }
//       stats.links[href]++
//     }
//     const dataId = this.getAttribute("data-id")
//     if (!stats.paragraphs[dataId]) {
//       stats.paragraphs[dataId] = 0
//     }
//     stats.paragraphs[dataId]++
//     renderStats(stats, statsElement)
//   })
// })

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats")

const fireCustomEvent = function (element, name) {
  console.log(element, "=>", name)

  const event = new CustomEvent(name, {
    bubbles: true,
  })

  element.dispatchEvent(event)
}

//funkcja która aktualizuje widok statystyk.
const renderStats = function (data, element) {
  let html = ""
  for (let elementType in data) {
    html += "<ul>"

    for (let key in data[elementType]) {
      html += "<li>"
      html += key + " -> " + data[elementType][key]
      html += "</li>"
    }

    html += "</ul>"
  }

  element.innerHTML = html
}

document.addEventListener("click", function (e) {
  const tagName = e.target.tagName
  if (tagName.includes("P") || tagName.includes("A")) {
    fireCustomEvent(statsElement, "render")
  }
})
statsElement.addEventListener(
  "render",
  renderStats.bind(this, stats, statsElement)
)
document.addEventListener(
  "DOMContentLoaded",
  fireCustomEvent.bind(null, statsElement, "render")
)
