const mouseMoveHandler = function() {
    this.innerText = 'I am moving over!';
}
const mouseLeaveHandler = function() {
    this.innerText = 'I have left the area!';
}
function startEventsProcessing() {
    const itemDiv = document.querySelector('div');

    itemDiv.addEventListener('mousemove', mouseMoveHandler);
    itemDiv.addEventListener('mouseout', mouseLeaveHandler);
}

document.addEventListener('DOMContentLoaded', startEventsProcessing);