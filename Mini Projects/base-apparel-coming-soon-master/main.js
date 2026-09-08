// i'm gonna be honest, most of these i don't know what the fuck they
// do i copied them from someone of youtube because i was bored
// and i had other things (projects) to do

const input = document.querySelector(".input");

const form = document.querySelector("form");

const error = document.querySelector(".error");

const red = document.querySelector(".red-message");

form.addEventListener("submit", e =>{
    
    e.preventDefault();
    console.log("1");
    const emailVal = input.value;

    if(validateEmail(emailVal)) {
        red.classList.add("hidden");
        error.classList.add("hidden");
        console.log("2");

    }else{
        console.log("3");   
        red.classList.remove("hidden")
        error.classList.remove("hidden");
    }

    
});

function validateEmail(email) {
  console.log("4");
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

