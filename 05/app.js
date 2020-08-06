const stats = {
    paragraphs: {
        p1: 0,
    },
    links: {
        "/dolor.html": 0,
    },
};

/* tutaj umieść swój kod */
const paragraph = document.querySelectorAll("p");
const a = document.getElementsByClassName("link");
const arr = Array.from(a);
paragraph.forEach(function(element) {
    element.addEventListener(
        "click",
        function(e) {
            const tagName = e.target.tagName;
            if (tagName.includes("P")) {
                stats.paragraphs["p1"]++;
            } else if (tagName.includes("A")) {
                stats.links["/dolor.html"]++;
            }
            console.log(stats.paragraphs);
        },
        true
    );
});
// arr.forEach(function(element) {
//     const href = element.getAttribute("href");

//     if (href === "/dolor.html") {
//         let i = stats.links["/dolor.html"];
//         element.addEventListener("click", function(e) {
//             console.log(e.target);
//             stats.links["/dolor.html"]++;
//             i++;
//         });
//     }
// });

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function(element, name) {
    console.log(element, "=>", name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
};

const renderStats = function(data, element) {
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

document.addEventListener("click", function(e) {
    const tagName = e.target.tagName;
    console.log(tagName);
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
    fireCustomEvent(statsElement, "render")
);