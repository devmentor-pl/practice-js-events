

const divEl = document.querySelector('div');

divEl.addEventListener("mousemove", function(e) {
    console.log( `x: ${e.x} | y: ${e.y}`)
});

divEl.addEventListener("mouseleave", function(e) {
    console.log('strzałka opuściła element');
});