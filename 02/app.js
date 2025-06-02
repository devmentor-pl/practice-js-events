const handleMove = function () {
  console.log('Coursor was moved');
};

const handleLeave = function () {
  console.log('Coursor was leaved');
};

const divElement = document.querySelector('div');
console.log(divElement);

if (divElement) {
  divElement.addEventListener('mousemove', handleMove);
  divElement.addEventListener('mouseleave', handleLeave);
}
