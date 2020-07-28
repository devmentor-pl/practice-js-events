const button = document.querySelector('button');
console.log(button);
const handleClick = function() {
    console.log(this.tagName + ' ' + 'was clicked');
};

button.addEventListener('click', handleClick);