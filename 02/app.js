






document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const div = document.querySelector('div')

    div.addEventListener('mousemove', function () {
        console.log('najechanie na element');
    })
    
    div.addEventListener('mouseleave', function () {
        console.log('opuszczenie elementu');
    })
  });