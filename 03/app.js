const button = document.querySelectorAll("button");
console.log(button);

function onClick(e) {
    const self = e.currentTarget;

    self.innerText = 'clicked';
    console.log(self.innerText);

    self.removeEventListener('click', onClick)
}

button.forEach(function(item) {
    item.addEventListener('click', onClick);
});