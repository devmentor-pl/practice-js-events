const div = document.querySelectorAll('div');
console.log(div)
//const classCreate = function()
//{
   // this.classList.add('clicked');
//}
//div.forEach(function(el)
//{
    //el.addEventListener('click', classCreate);
//})

const body = document.querySelector('body');
console.log(body);

const classDelete = function(e)
{
    if(e.target === e.currentTarget)
    {
        //console.log(this.tagName);
        console.log(div);
        div.forEach(function(el){
            el.classList.remove('clicked');
        })
    }  
}

    body.addEventListener('click', classDelete);

    //const time = document.querySelectorAll('[data-time]');
   // console.log(time);

    div.forEach(function(el)
    {
        
        //console.log(data);
        const useTimeout = function(e)
        {
            const data = e.currentTarget.dataset.time;
            const checkData= function()
                {
                    el.classList.add('clicked');
                    //console.log(parseInt(e.target.dataset.time))  

                }
            setTimeout(checkData, data); 
        }
            el.addEventListener('click', useTimeout);
        
    })


    