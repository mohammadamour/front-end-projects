

// the variables that i need to minipulate elements

// turning the buttons  into variables
const firstButton = document.querySelector(".change-container-color");

const secButton = document.querySelector(".change-text-color");

const thirdButton = document.querySelector(".change-font-style");

const fourthButton = document.querySelector(".change-font-weight");

const fifthButton = document.querySelector(".change-letters-state");

const bigAssContainer = document.querySelector(".container");


// turning the elements of the containers into variables
const backgroundColorContainer = document.querySelector(".background-color-container");

const textColorContainer = document.querySelector(".text-color-container");

const fontFamilyContainer = document.querySelector(".font-family-container");

const fontWeightContainer = document.querySelector(".font-weight-container");

const letterCasingContainer = document.querySelector(".letter-casing-container");

const backgroundcontainerInput = document.querySelector(".input-background");


let lastDivInput = document.querySelector(".change-backgound-color");


const mainP = document.querySelector(".main-p");

// const main = document.querySelector(".main-s");

mainP.addEventListener("click", function(){

  mainP.classList.add("main-s");
});



// ##################
// ###first button###
// ##################

firstButton.addEventListener("click", function () {
  setTimeout(function () {

    backgroundColorContainer.classList.toggle("hidden");

    textColorContainer.classList.add("hidden");

    fontFamilyContainer.classList.add("hidden");

    fontWeightContainer.classList.add("hidden");

    letterCasingContainer.classList.add("hidden");

    lastDivInput.classList.add("hidden");

  }, 100);
});



var numberOfChildBackgroundColor = document.querySelectorAll(

  ".child-background-color"

).length;

for (var i = 0; i < numberOfChildBackgroundColor; i++) {

   document.querySelectorAll(".child-background-color")

    [i].addEventListener("click", function () {

      function colorPicker(e){

      let colorValue1 = e.target.value;

       bigAssContainer.style.backgroundColor = colorValue1;
   };

     const backgroundInput = document.querySelector(".input-background");

      bigAssContainer.style.backgroundColor =
        getComputedStyle(this).backgroundColor;

        backgroundInput.addEventListener("change", colorPicker)

    });
}



// ##################
// ###second button###
// ##################
secButton.addEventListener("click", function () {
  setTimeout(function () {

    textColorContainer.classList.toggle("hidden");

        backgroundColorContainer.classList.add("hidden");

        fontFamilyContainer.classList.add("hidden");

        fontWeightContainer.classList.add("hidden");

        letterCasingContainer.classList.add("hidden");

        lastDivInput.classList.add("hidden");

  }, 100);
});


var numberOfChildTextColor = document.querySelectorAll(

  ".child-text-color"

).length;

for (var f = 0; f < numberOfChildTextColor; f++) {
  document
    .querySelectorAll(".child-text-color")

    [f].addEventListener("click", function () {
      
      function colorPicker2(e) {

        let colorValue2 = e.target.value;

        mainP.style.color = colorValue2;
      }

      const textInput = document.querySelector(".input-text");

      // bigAssContainer.style.backgroundColor =
      //   getComputedStyle(this).backgroundColor;

      textInput.addEventListener("change", colorPicker2);

      mainP.style.color = getComputedStyle(this).color;
    });
}





// ##################
// ###third button###
// ##################




thirdButton.addEventListener("click", function () {
  setTimeout(function () {

    fontFamilyContainer.classList.toggle("hidden");

        backgroundColorContainer.classList.add("hidden");

        textColorContainer.classList.add("hidden");

        fontWeightContainer.classList.add("hidden");

        letterCasingContainer.classList.add("hidden");

        lastDivInput.classList.add("hidden");

  }, 100);
});


var numberOfChildFontFamily = document.querySelectorAll(

  ".child-font-family"

).length;

for (var q = 0; q < numberOfChildFontFamily; q++) {

   document
     .querySelectorAll(".child-font-family")

     [q].addEventListener("click", function () {
       const style3 = getComputedStyle(this);

       const fontFamilying = style3.fontFamily;

       console.log(fontFamilying);

       mainP.style.fontFamily = fontFamilying;

     });
}





// ##################
// ###fourth button###
// ##################


fourthButton.addEventListener("click", function () {
  setTimeout(function () {

    fontWeightContainer.classList.toggle("hidden");

        backgroundColorContainer.classList.add("hidden");

        textColorContainer.classList.add("hidden");

        fontFamilyContainer.classList.add("hidden");

        letterCasingContainer.classList.add("hidden");

        lastDivInput.classList.add("hidden");

  }, 100);
});


var numberOfChildFontWeight = document.querySelectorAll(

  ".child-font-weight"

).length;

for (var h = 0; h < numberOfChildFontWeight; h++) {
  document
    .querySelectorAll(".child-font-weight")

    [h].addEventListener("click", function () {
      const style4 = getComputedStyle(this);

      const fontWeighting = style4.fontWeight;

      console.log(fontWeighting);

      mainP.style.fontWeight = fontWeighting;
    });
}





// ##################
// ###fifth button###
// ##################


fifthButton.addEventListener("click", function () {
  setTimeout(function () {

    letterCasingContainer.classList.toggle("hidden");

            backgroundColorContainer.classList.add("hidden");

            textColorContainer.classList.add("hidden");

            fontWeightContainer.classList.add("hidden");

            fontFamilyContainer.classList.add("hidden");

            lastDivInput.classList.add("hidden");

  }, 100);
});


var numberOfChildLetterCasing = document.querySelectorAll(

  ".letter-transform"

).length;

for (var o = 0; o < numberOfChildLetterCasing; o++) {
  document
    .querySelectorAll(".letter-transform")

    [o].addEventListener("click", function () {
      const style5 = getComputedStyle(this);

      const textTransformimg = style5.textTransform;

      console.log(textTransformimg);

      mainP.style.textTransform = textTransformimg;
    });
}







const lastButton = document.querySelector(".last-button")

lastButton.addEventListener("click",function(){

  let lastDivInput = document.querySelector(".change-backgound-color");

  lastDivInput.classList.toggle("hidden");

  backgroundColorContainer.classList.add("hidden");

  letterCasingContainer.classList.add("hidden");

  backgroundColorContainer.classList.add("hidden");

  textColorContainer.classList.add("hidden");

  fontWeightContainer.classList.add("hidden");

  fontFamilyContainer.classList.add("hidden");

})



const body = document.querySelector("body");

      function colorPicker3(e) {
        let colorValue3 = e.target.value;

        body.style.backgroundColor = colorValue3;

        console.log(colorValue3);
      }

      const backgroundInput = document.querySelector(".background-color-input");

      backgroundInput.addEventListener("change", colorPicker3);
