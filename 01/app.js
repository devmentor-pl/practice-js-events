const btnElement = document.querySelector('button');

const btnEvent = function(e) {
    console.log(`clicked: ${this.tagName} time: ${e.timeStamp}`);
}

btnElement.addEventListener('click', btnEvent);