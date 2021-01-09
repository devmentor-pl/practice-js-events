document.addEventListener('DOMContentLoaded', function () {
    // console.log('działa');

    const div = document.querySelector('div');

    div.addEventListener('mouseenter', function () {
        console.log('Najechałeś na div');
    });


    div.addEventListener('mouseleave', function () {
        console.log('Kursor poza div');
    });
});