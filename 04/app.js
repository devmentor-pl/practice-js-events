const div = document.querySelectorAll('div');
console.log(div)
const classCreate = function()
{
   // this.classList.add('clicked');
}
div.forEach(function(el)
{
    el.addEventListener('click', classCreate);
})

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

    const time = document.querySelectorAll('[data-time]');
    console.log(time);

    time.forEach(function(el)
    {
        const data = parseInt(el.dataset.time);
        console.log(data);
        const useTimeout = function(e)
        {
            const checkData= function()
                {
                    if(parseInt(e.target.dataset.time)=== data)
                    {
                    e.target.classList.add('clicked');
                    //console.log(parseInt(e.target.dataset.time))
                    }

                }
            setTimeout(checkData, data); 
        }
        div.forEach(function(el)
        {
            el.addEventListener('click', useTimeout);
        })
    })


    