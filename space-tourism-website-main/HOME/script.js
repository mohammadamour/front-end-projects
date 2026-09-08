const navItem1 = document.querySelectorAll(".nav-item")[0];
const navItem2 = document.querySelectorAll(".nav-item")[1];
const navItem3 = document.querySelectorAll(".nav-item")[2];

const scalingLine1 = document.querySelectorAll(".scaling-line")[0];
const scalingLine2 = document.querySelectorAll(".scaling-line")[1];
const scalingLine3 = document.querySelectorAll(".scaling-line")[2];







function hover1() {

  function delayed(){
    dropDot1.classList.add("mouseon");
    dropDot1.classList.remove("mouseout");
    
}

setTimeout(delayed, 500);

};


function hover2() {

  function delayed() {
    dropDot2.classList.add("mouseon");
    dropDot2.classList.remove("mouseout");
  }

  setTimeout(delayed, 500);
};

function hover3() {

  function delayed() {
    dropDot3.classList.add("mouseon");
    dropDot3.classList.remove("mouseout");
  }

  setTimeout(delayed, 500);
};

navItem1.onmouseover = function() {hover1()};
navItem2.onmouseover = function() {hover2()};
navItem3.onmouseover = function() {hover3()};







function unhover1() {

  dropDot1.classList.remove("mouseon");
  dropDot1.classList.add("mouseout");

  function delayed() {
    dropDot1.classList.remove("translated2");

    dropDot1.classList.add("hidden");
  }

  setTimeout(delayed, 500);

};




function unhover2() {

  dropDot2.classList.remove("mouseon");
  dropDot2.classList.add("mouseout");

  function delayed() {
    dropDot2.classList.remove("translated2");

    dropDot2.classList.add("hidden");
  }

  setTimeout(delayed, 500);

};



function unhover3() {

  dropDot3.classList.remove("mouseon");
  dropDot3.classList.add("mouseout");

  function delayed() {
    dropDot3.classList.remove("translated2");

    dropDot3.classList.add("hidden");
  }

  setTimeout(delayed, 500);

};

navItem1.onmouseout = function() {unhover1()};
navItem2.onmouseout = function() {unhover2()};
navItem3.onmouseout = function() {unhover3()};







const userswidth = window.innerWidth;

const root = document.querySelector(":root");

var rootStyle = getComputedStyle(root);

root.style.setProperty("--screen-width", userswidth);








const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector("nav ul");

ham.addEventListener("click", function(){

  ul.classList.add("translated2");

  ham.classList.add("hidden2");

  close.classList.remove("hidden2");

});



close.addEventListener("click", function(){

  ul.classList.remove("translated2");

  ham.classList.remove("hidden2");

  close.classList.add("hidden2");

});