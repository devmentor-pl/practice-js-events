const btnElement = document.querySelector('button');

const handleClick = () => console.log('clicked');
if(btnElement !== null) {
  btnElement.addEventListener('click', handleClick);
}
