// i'm gonna be honest, most of these i don't know what the fuck they
// do i copied them from someone of youtube because i was bored
// and i had other things (projects) to do

console.log("i got bitches along my dick everyday, sucking my balls, licking my balls");

const input = document.querySelector("input");

const form = document.querySelector("form");

const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  console.log("1");
  e.preventDefault();
  const emailVal = input.value;

  if (validateEmail(emailVal)) {
    console.log("2");
    error.classList.add("hidden");
  } else {
    console.log("3");
    error.classList.remove("hidden");
  }
});

function validateEmail(email) {
  console.log("4");
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
