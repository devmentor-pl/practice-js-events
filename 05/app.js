const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */
const paragraphs = document.querySelectorAll("p");

const paragraphClicked = function (e) {
  const id = e.target.dataset.id;
  if (id !== undefined) {
    if (stats.paragraphs[id]) {
      stats.paragraphs[id]++;
    } else {
      stats.paragraphs[id] = 1;
    }
  }
};

for (p of paragraphs) {
  p.addEventListener("click", paragraphClicked);
}

const links = document.querySelectorAll("a");

const linkClicked = function (e) {
  e.preventDefault();
  if (stats.links[e.target.pathname]) {
    stats.links[e.target.pathname]++;
  } else {
    stats.links[e.target.pathname] = 1;
  }
};

for (link of links) {
  link.addEventListener("click", linkClicked);
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
