const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */
const everyP = Array.from(document.querySelectorAll("p"));

everyP.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault(); //to stop <a>
    const dataId = e.target.getAttribute("data-id");
    const href = e.target.getAttribute("href");

    if (dataId) {
      countClicks(stats.paragraphs, dataId);
    } else if (href) {
      countClicks(stats.links, href);
    }

    function countClicks(object, key) {
      if (!hasKey(object, key)) {
        return (object[key] = 1);
      } else {
        return object[key]++;
      }
    }

    function hasKey(object, key) {
      const keysList = Object.keys(object);
      return keysList.includes(key);
    }
  });
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
