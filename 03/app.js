document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('button');
    if(buttons) {
        function clicked(event) {
            console.log('clicked');
            event.target.innerText = 'clicked';
            event.target.removeEventListener('click', clicked);
        }
        buttons.forEach(function(button){
             button.addEventListener('click', clicked)
             });
         };
    
})