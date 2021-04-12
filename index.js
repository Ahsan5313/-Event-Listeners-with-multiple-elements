  document.querySelectorAll(".my_button")[0].addEventListener("click",function(){

    var text = this.innerHTML;
            
    document.querySelector("h1").innerHTML = text + "is clicked";
})


document.querySelectorAll(".my_button")[1].addEventListener("click",function(){

    var text = this.innerHTML;
            
    document.querySelector("h1").innerHTML = text + "is clicked";
})

document.querySelectorAll(".my_button")[2].addEventListener("click",function(){

    var text = this.innerHTML;
            
    document.querySelector("h1").innerHTML = text + "is clicked";
})
