const ul = document.querySelector("nav ul");

const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

ham.addEventListener("click", function(){
   
    ul.classList.remove("translated");

    ham.style.display = "none";

    close.style.display = "block";

});


close.addEventListener("click", function(){

    ul.classList.add("translated");

    ham.style.display = "block";

    close.style.display = "none";

})