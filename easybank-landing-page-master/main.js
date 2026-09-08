const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector(".menuJS");

ham.addEventListener("click", function(){
    
    ul.classList.add("menu");

    close.style.display = "block";

    ham.style.display = "none";
    
});

close.addEventListener("click", function(){

    ul.classList.remove("menu");

    close.style.display = "none";

    ham.style.display = "block";

});