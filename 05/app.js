const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */
const links = document.querySelectorAll(".link");
const preventFollowLink = function (e) {
  e.preventDefault();
};
links.forEach(function (link) {
  link.addEventListener("click", preventFollowLink);
});
let dolorCounter = 0;
const pTags = document.querySelectorAll("p");

const countClicks = function (countTag, countLinkTag, linkHref, e) {
  if (
    e.target.tagName === countLinkTag &&
    e.target.getAttribute("href") === linkHref
  ) {
    stats.links[linkHref] = ++dolorCounter;
    console.log(stats);
  } else if (e.target.tagName === countTag) {
    const pDataId = e.target.dataset.id;
    !stats.paragraphs[`${pDataId}`]
      ? (stats.paragraphs[`${pDataId}`] = 1)
      : (stats.paragraphs[`${pDataId}`] =
          Number(stats.paragraphs[`${pDataId}`]) + 1);
    console.log(stats);
  }
};

pTags.forEach(function (pTag) {
  pTag.addEventListener(
    "click",
    countClicks.bind(null, "P", "A", "/dolor.html")
  );
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
