const btnList = document.querySelectorAll('button')
console.log(btnList)

const changeTxt = function()
{
    this.innerText = "clicked";
    console.log('clicked')
    this.removeEventListener('click', changeTxt)

}

btnList.forEach(function(el)
{
    el.addEventListener('click', changeTxt)
   
})