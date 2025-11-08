var searchicon = document.querySelector("#search")
var productcontainer = document.querySelector(".products")

var productlist = productcontainer.querySelectorAll("div")

searchicon.addEventListener("keyup",()=>{
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count++){

        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){

            productlist[count].style.display="none"
        }
        else {

            productlist[count].style.display="block"
        }
    }
})