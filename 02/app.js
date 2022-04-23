document.addEventListener("DOMContentLoaded", function(){
    console.log('DOM fully loaded and parsed');
    const div = document.querySelector("div");
    
    div.addEventListener("mousemove", function(){
        console.log("Mousemove on div.")
    });

    div.addEventListener("mouseleave", ()=>{
        console.log("Mouseleave from div.")
    });

})