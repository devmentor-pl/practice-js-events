const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

const paragraphsList = document.querySelectorAll(".text");

paragraphsList.forEach((paragrapgh) => {
  paragrapgh.addEventListener("click", handleClick);
});

function handleClick(e) {
  const link = e.target.closest(".link");

  if (link) {
    e.preventDefault();
    const href = link.getAttribute("href");
    updateStats("links", href);
  } else {
    const id = e.target.dataset.id;
    updateStats("paragraphs", id);
  }
}

function updateStats(type, key) {
  stats[type][key] = (stats[type][key] += 1) || 1;
}

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
