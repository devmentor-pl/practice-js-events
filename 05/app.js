const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */
const paragrafEl = document.querySelectorAll(".text");

function renderStatement(attributeFirst, attributeSecond) {
  if (attributeFirst[attributeSecond] !== undefined) {
    attributeFirst[attributeSecond]++;
  } else {
    attributeFirst[attributeSecond] = 1;
  }
}

const countPressOfLinks = function (e) {
  if (e.target.tagName === "A" && e.target.classList.contains("link")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    renderStatement(stats.links, href);
  }

  const paragrafId = e.target.dataset.id;
  renderStatement(stats.paragraphs, paragrafId);
};

paragrafEl.forEach(function (item) {
  item.addEventListener("click", countPressOfLinks);
});

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
