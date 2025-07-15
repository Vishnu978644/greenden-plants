const sidenav=document.getElementById("sidenav")
const menuicon=document.getElementById("menuicon")
const closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})