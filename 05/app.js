const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

function counterClick(e) {
  e.preventDefault();
  if (e.target.tagName === "P") {
    const id = e.target.dataset.id
    if (typeof stats.paragraphs[id] === 'undefined') {
      stats.paragraphs[id] = 0;
    }
    console.log(stats.paragraphs)
    ++stats.paragraphs[id];
  } 
  if (e.target.tagName === "A") {
    const href = e.target.getAttribute('href');
    
    if (typeof stats.links[href] === 'undefined') {
      stats.links[href] = 0;
    }
    console.log(stats.links)
    ++stats.links[href]
  }
  
}
const pElements = document.querySelectorAll(".text").forEach(function (item) {
  item.addEventListener("click", counterClick);
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
  // console.log(element, '=>', name);

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
