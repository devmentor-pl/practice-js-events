const btnElement = document.querySelector('button');
console.log(btnElement);

const handleClick = function () {
  console.log('clicked');
};

if (btnElement) {
  btnElement.addEventListener('click', handleClick);
}
