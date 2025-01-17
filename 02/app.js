const div = document.querySelector('div');

if (div){

    const handleOver = function(){
        console.log('You are on div element');
    }

    const handleLeave = function(){
        console.log('You left div element');
    }

    div.addEventListener('mousemove', handleOver);
    div.addEventListener('mouseleave', handleLeave);
    
}