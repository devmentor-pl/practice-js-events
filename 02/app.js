const divElement = document.querySelector('div')

divElement.addEventListener('mouseenter', function() {
    console.log('Najechano kursorem na element');
  
});

divElement.addEventListener('mouseleave', function() {
    console.log('Kursor opuścił element');

});