const sidenav = document.getElementById("sidenav")
const menuicon = document.getElementById("menuicon")
const closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


//search function
const productcontainer = document.getElementById("productcontainer");


const search = document.getElementById("search");

const productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup",function(event){
    const enteredvalue = event.target.value.toUpperCase();

    for (let count = 0; count < productlist.length; count = count + 1) {
        const productname = productlist[count].querySelector("h1").textContent;

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        }
        else {
            productlist[count].style.display = "block";
        }

    }
})
