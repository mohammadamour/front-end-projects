// this part is just for the search bar

// declaring the variables that i will need in the next steps
const country = document.querySelector(".country");

const input = document.getElementById("input");

const inputValue = input.value;

const showAllCountries = document.querySelector(".show-all-coutries");

const container = document.querySelector(".container");

const apologyMessage = document.querySelector(".apology");

const select = document.querySelector(".select");

// some variables just so i can target them later when the user uses the
// search bar by hiding the all other cards and displaying just the needed one
const num0 = document.querySelectorAll(".countryjs")[0];
const num1 = document.querySelectorAll(".countryjs")[1];
const num2 = document.querySelectorAll(".countryjs")[2];
const num3 = document.querySelectorAll(".countryjs")[3];
const num4 = document.querySelectorAll(".countryjs")[4];
const num5 = document.querySelectorAll(".countryjs")[5];
const num6 = document.querySelectorAll(".countryjs")[6];
const num7 = document.querySelectorAll(".countryjs")[7];

// to use if statement to compare the user input with all the available card
// i couldn't find better way to do so than targeting the h2s of each card
// and putting them in variables and then using it inside the if statement
// in order to display just the card that has a class of the same input that
// the user inputs, and now i'm going to try to make the first letter of the
//  user input in upper case, because then the user will not have to worry
// about if the first letter is capital or not
const hTows = document.querySelectorAll("h2");

// when clicking on the submit button, these tasks will run
document.querySelector(".submit-btn").onclick = function () {
  // number of card exist
  var numberOfCoutries = document.querySelectorAll(".country").length;

  // for loop
  for (var i = 0; i < numberOfCoutries; i++) {
    let search = document.getElementById("input").value;

    const searchSliced = search.slice(0, 1).toUpperCase();
    const ss = searchSliced.toUpperCase();
    const restOfWord = search.length;
    const ff = search.slice(1, restOfWord).toLowerCase();
    const finalValue = ss + ff;

    const numOfCountry = document.querySelectorAll("h2")[i];

    const hTwo = numOfCountry.innerHTML;

    if (finalValue == hTwo) {
      const countryName = document.querySelectorAll(".countryjs")[i];

      num0.classList.add("hidden");
      num1.classList.add("hidden");
      num2.classList.add("hidden");
      num3.classList.add("hidden");
      num4.classList.add("hidden");
      num5.classList.add("hidden");
      num6.classList.add("hidden");
      num7.classList.add("hidden");
      countryName.classList.remove("hidden");
      showAllCountries.classList.add("cant-see");
      apologyMessage.classList.add("hidden");
    } else {
      const countryName = document.querySelectorAll(".countryjs")[i];
      const attr = document.querySelector("footer");
      attr.style.position = "relative";
      attr.style.top = "60%";
      showAllCountries.classList.remove("cant-see");
      apologyMessage.classList.remove("cant-see");
      countryName.classList.add("hidden");
    }
  }
};

// DARK MODE TOGGLE BUTTON

const lightModeButton = document.querySelector(".light-mode");

function changingtheme() {
  const ValueGray = "--clr-value";
  // light mode colors

  const bgLight = "--clr-light-bg";
  const cardBgWhite = " --clr-light-mode-cards";
  const lightModeText = " --clr-light-mode-text";

  // dark mode colors

  const bgDark = "--clr-dark-mode-bg";
  const cardBgDark = "--clr-nav-cards-dark-mode";
  const darkModeText = "--clr-dark-mode-text";

  document.documentElement.style.setProperty(bgDark, "hsl(0, 0%, 95%)");

  document.documentElement.style.setProperty(darkModeText, lightModeText);

  document.documentElement.style.setProperty(cardBgDark, "hsl(0, 0%, 100%)");

  document.documentElement.style.setProperty(ValueGray, "hsla(0, 0%, 40%, 1)");

  select.style.color = "black";
  input.style.color = "black";

  const darkMode = document.querySelector(".dark-mood");

  const lightMode = document.querySelector(".light-mode");

  darkMode.classList.remove("hidden");
  lightMode.classList.add("hidden");
}

lightModeButton.addEventListener("click", changingtheme);

select.addEventListener("click", function () {
  const ul = document.querySelector(".con-ul");

  ul.classList.toggle("scale");
});

// filter by region button

const africa = document.querySelector(".li-country1");

const aisa = document.querySelector(".li-country2");

const americas = document.querySelector(".li-country3");

const europe = document.querySelector(".li-country4");

const oceania = document.querySelector(".li-country5");

africa.onclick = function () {

    num0.classList.add("hidden");

    num1.classList.add("hidden");

    num2.classList.add("hidden");

    num3.classList.add("hidden");

    num4.classList.add("hidden");

    num5.classList.add("hidden");

    num6.classList.add("hidden");

    num7.classList.remove("hidden");
};

aisa.onclick = function () {
    
    num0.classList.add("hidden");

    num1.classList.add("hidden");

    num2.classList.add("hidden");

    num3.classList.add("hidden");

    num4.classList.remove("hidden");
    num5.classList.add("hidden");

    num6.classList.add("hidden");

    num7.classList.add("hidden");

};

americas.onclick = function () {

    num0.classList.add("hidden");

    num1.classList.remove("hidden");

    num2.classList.remove("hidden");
    num3.classList.add("hidden");

    num4.classList.add("hidden");

    num5.classList.add("hidden");

    num6.classList.add("hidden");

    num7.classList.add("hidden");

};

europe.onclick = function () {

    num0.classList.remove("hidden");

    num1.classList.add("hidden");

    num2.classList.add("hidden");

    num3.classList.remove("hidden");

    num4.classList.add("hidden");

    num5.classList.remove("hidden");

    num6.classList.remove("hidden");

    num7.classList.add("hidden");

};

oceania.onclick = function () {

    num0.classList.add("hidden");

    num1.classList.add("hidden");

    num2.classList.add("hidden");

    num3.classList.add("hidden");

    num4.classList.add("hidden");

    num5.classList.add("hidden");

    num6.classList.add("hidden");

    num7.classList.add("hidden");
};