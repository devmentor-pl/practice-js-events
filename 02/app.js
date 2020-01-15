document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector('div');
    div.addEventListener('mouseenter', () => {
        console.log('mouse in div');
    });
    div.addEventListener('mouseleave', () => {
        console.log('mouse out from div');
    })
});
