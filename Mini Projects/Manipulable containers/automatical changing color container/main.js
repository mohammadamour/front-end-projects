const container = document.querySelector(".container");

const btn = document.querySelector(".button");

const transitionInput = document.querySelector(".transition");

const animation = document.querySelector(".anime10");

const explainationText = document.querySelector(".tutorial-text");

const explainationButton = document.querySelector(".tutorial-button");

explainationButton.addEventListener("click",function(){

    explainationText.classList.toggle("hidden");

});

btn.addEventListener("click", function(){

    container.classList.toggle("anime10");

});

function changed(e){
    const transitionValue = e.target.value;

    animation.style.animation =
      "anime " + transitionValue + " ease-in-out infinite";
}
transitionInput.addEventListener("input", changed);


// the ten input fields that give the ability to the user to choose colors
const input1 = document.querySelector(".input1");

const input2 = document.querySelector(".input2");

const input3 = document.querySelector(".input3");

const input4 = document.querySelector(".input4");

const input5 = document.querySelector(".input5");

const input6 = document.querySelector(".input6");

const input7 = document.querySelector(".input7");

const input8 = document.querySelector(".input8");

const input9 = document.querySelector(".input9");

const input10 = document.querySelector(".input10");



// making a function that takes the color that the user inputs and assign
// with a variable and change the colors in the css variables and replace
// them with the colors that the user puts and with using the parameter e
// input color 1
function function1(e) {
    // here i targeted the parameter e and took its value and assign
    // it into a variables to use later
  const whatWeNeed = e.target.value;

//   bringing the css vairables and assign them into js variables 
  const color1 = "--clr1";

//   replacing the new value with the old value 
  document.documentElement.style.setProperty(color1, whatWeNeed);

//   console loging the user's input, just to make sure the code is 
// working properly, and it does but i'm too lazt to delete them
  console.log(whatWeNeed);
}
input1.addEventListener("change", function1);



// input color 2
function function2(e) {
  const whatWeNeed = e.target.value;

  const color2 = "--clr2";

  document.documentElement.style.setProperty(color2, whatWeNeed);

    console.log(whatWeNeed);
}
input2.addEventListener("change", function2);



// input color 3
function function3(e) {
  const whatWeNeed = e.target.value;

  const color3 = "--clr3";

  document.documentElement.style.setProperty(color3, whatWeNeed);

    console.log(whatWeNeed);
}
input3.addEventListener("change", function3);



// input color 4
function function4(e) {
  const whatWeNeed = e.target.value;

  const color4 = "--clr4";

  document.documentElement.style.setProperty(color4, whatWeNeed);

    console.log(whatWeNeed);
}
input3.addEventListener("change", function3);


// input color 5
function function5(e){
  const whatWeNeed = e.target.value;

  const color5 = "--clr5";

  document.documentElement.style.setProperty(color5, whatWeNeed);

    console.log(whatWeNeed);
}
input5.addEventListener("change", function1);



// input color 6
function function6(e) {
  const whatWeNeed = e.target.value;

  const color6 = "--clr6";

  document.documentElement.style.setProperty(color6, whatWeNeed);

    console.log(whatWeNeed);
}
input6.addEventListener("change", function6);



// input color 7
function function7(e) {
  const whatWeNeed = e.target.value;

  const color7 = "--clr7";

  document.documentElement.style.setProperty(color7, whatWeNeed);

    console.log(whatWeNeed);
}
input7.addEventListener("change", function1);



// input color 8
function function8(e) {
  const whatWeNeed = e.target.value;

  const color8 = "--clr8";

  document.documentElement.style.setProperty(color8, whatWeNeed);

    console.log(whatWeNeed);
}
input8.addEventListener("change", function8);



// input color 9
function function9(e) {
  const whatWeNeed = e.target.value;

  const color9 = "--clr9";

  document.documentElement.style.setProperty(color9, whatWeNeed);

    console.log(whatWeNeed);
}
input9.addEventListener("change", function9);



// input color 10 
function function10(e) {
  const whatWeNeed = e.target.value;

  const color10 = "--clr10";

  document.documentElement.style.setProperty(color10, whatWeNeed);

    console.log(whatWeNeed);
}
input10.addEventListener("change", function10);