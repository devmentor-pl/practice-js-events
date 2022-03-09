const mousemoveInfo = function() {
    console.log('Kursor znajduje się w elemencie');
}
const mouseleaveInfo = function() {
    console.log('Kursor znajduje się poza elementem');
}

const init = function() {
    const div = document.querySelector('div');

    if(div) {
        div.addEventListener('mousemove', mousemoveInfo);
        div.addEventListener('mouseleave', mouseleaveInfo);
    }
}

document.addEventListener('DOMContentLoaded', init);