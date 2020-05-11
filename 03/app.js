const btnList = document.querySelectorAll('button')
console.log(btnList)

const changeTxt = function()
{
    this.innerText = "clicked";
    console.log('clicked')
    btnList.forEach(function(el)
    {
        el.removeEventListener('click', changeTxt)
    })
}

btnList.forEach(function(el)
{
    el.addEventListener('click', changeTxt)
   
})