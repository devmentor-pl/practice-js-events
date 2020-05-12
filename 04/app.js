const div = document.querySelectorAll('div')
console.log(div)
const classCreate = function()
{
    this.classList.add('clicked')
}
div.forEach(function(el)
{
    el.addEventListener('click', classCreate)
})

const body = document.querySelectorAll('body, div')
console.log(body)

const classDelete = function(e)
{
    if(e.target === e.currentTarget)
    {
        //console.log(e.tagName, div)
        console.log(this.tagName)
        if(this.tagName === 'BODY')
        {//e.stopImmediatePropagation()
            //console.log('as')
            console.log(div)
            const d = function()
            {
                this.classList.remove('clicked')
            }
div.forEach(function(o)
            {
o.addEventListener('click', d)
            })
        }
        
    }
    
}

body.forEach(function(el)
{
    el.addEventListener('click', classDelete)
})