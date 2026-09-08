// i'm gonna be honest, most of these i don't know what the fuck they
// do i copied them from someone of youtube because i was bored
// and i had other things (projects) to do


const input = document.querySelector("input");

const form = document.querySelector("form");

const error = document.querySelector(".error");

form.addEventListener("submit", e =>{
    
    e.preventDefault();
    console.log("1");
    const emailVal = input.value;

    if(validateEmail(emailVal)) {
        error.classList.add("hidden");
        console.log("2");

    }else{
        console.log("3");   
        error.classList.remove("hidden");
        input.style.color = "rgb(233, 79, 79)";
    }

    
});

function validateEmail(email) {
  console.log("4");
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


// the hamburger menua for mobile preview

const ham = document.querySelector(".ham");

const x = document.querySelector(".close");

const ul = document.querySelector(".menu");

const li = document.querySelector("nav ul li");

ham.addEventListener("click", function(){

    ham.classList.add("hidden");

    x.classList.remove("hidden");

    ul.classList.add("menujs");

});


x.addEventListener("click", function(){

    ham.classList.remove("hidden");

    x.classList.add("hidden");

    ul.classList.remove("menujs");

})