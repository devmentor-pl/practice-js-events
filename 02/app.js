const div = document.querySelector('div');

div.addEventListener('mousemove', function () {
  console.log('mouse moving on the square');
})
div.addEventListener('mouseleave', function () {
  console.log('mouse leaves the square');
})