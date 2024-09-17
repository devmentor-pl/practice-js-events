const init = function() {
    const divEl = document.querySelector('div');
    if (divEl) {
        divEl.addEventListener('mousemove', function() {
            console.log('mouse above the div element')
        });
        divEl.addEventListener('mouseleave', function() {
            console.log('mouse outside the div element')
        });
    }
}
document.addEventListener('DOMContentLoaded', init);