const navItem1 = document.querySelectorAll(".nav-item")[0];
const navItem2 = document.querySelectorAll(".nav-item")[1];
const navItem3 = document.querySelectorAll(".nav-item")[2];

const scalingLine1 = document.querySelectorAll(".scaling-line")[0];
const scalingLine2 = document.querySelectorAll(".scaling-line")[1];
const scalingLine3 = document.querySelectorAll(".scaling-line")[2];

function hover1() {
  // dropDot1.classList.remove("hidden"); // Removed

  // dropDot1.classList.add("translated2"); // Removed

  function delayed() {
    // dropDot1.classList.add("mouseon"); // Removed
    // dropDot1.classList.remove("mouseout"); // Removed
  }

  setTimeout(delayed, 500);
}

function hover2() {
  // dropDot2.classList.remove("hidden"); // Removed

  // dropDot2.classList.add("translated2"); // Removed

  function delayed() {
    // dropDot2.classList.add("mouseon"); // Removed
    // dropDot2.classList.remove("mouseout"); // Removed
  }

  setTimeout(delayed, 500);
}

function hover3() {
  // dropDot3.classList.remove("hidden"); // Removed

  // dropDot3.classList.add("translated2"); // Removed

  function delayed() {
    // dropDot3.classList.add("mouseon"); // Removed
    // dropDot3.classList.remove("mouseout"); // Removed
  }

  setTimeout(delayed, 500);
}

navItem1.onmouseover = function () {
  hover1();
};
navItem2.onmouseover = function () {
  hover2();
};
navItem3.onmouseover = function () {
  hover3();
};

function unhover1() {
  // dropDot1.classList.remove("mouseon"); // Removed
  // dropDot1.classList.add("mouseout"); // Removed

  function delayed() {
    // dropDot1.classList.remove("translated2"); // Removed

    // dropDot1.classList.add("hidden"); // Removed
  }

  setTimeout(delayed, 500);
}

function unhover2() {
  // dropDot2.classList.remove("mouseon"); // Removed
  // dropDot2.classList.add("mouseout"); // Removed

  function delayed() {
    // dropDot2.classList.remove("translated2"); // Removed

    // dropDot2.classList.add("hidden"); // Removed
  }

  setTimeout(delayed, 500);
}

function unhover3() {
  // dropDot3.classList.remove("mouseon"); // Removed
  // dropDot3.classList.add("mouseout"); // Removed

  function delayed() {
    // dropDot3.classList.remove("translated2"); // Removed

    // dropDot3.classList.add("hidden"); // Removed
  }

  setTimeout(delayed, 500);
}

navItem1.onmouseout = function () {
  unhover1();
};
navItem2.onmouseout = function () {
  unhover2();
};
navItem3.onmouseout = function () {
  unhover3();
};














//////////////////////////////////////////////
//////////////the planets navbar//////////////
//////////////////////////////////////////////

//////////////////
// all variables//
/////////////////

// commander stuff

const commander = document.getElementById("commander");

const comRole = document.querySelectorAll(".role-data")[0];

const comName = document.querySelectorAll(".name-data")[0];

const comDesc = document.querySelectorAll(".desc-data")[0];

const comImg = document.querySelectorAll(".img-data")[0];


// specialist stuff

const specialist = document.getElementById("specialist");

const specRole = document.querySelectorAll(".role-data")[1];

const specName = document.querySelectorAll(".name-data")[1];

const specDesc = document.querySelectorAll(".desc-data")[1];

const specImg = document.querySelectorAll(".img-data")[1];


// pilot stuff

const pilot = document.getElementById("pilot");

const pilotRole = document.querySelectorAll(".role-data")[2];

const pilotName = document.querySelectorAll(".name-data")[2];

const pilotDesc = document.querySelectorAll(".desc-data")[2];

const pilotImg = document.querySelectorAll(".img-data")[2];


// engineer stuff

const engineer = document.getElementById("engineer");

const engineerRole = document.querySelectorAll(".role-data")[3];

const engineerName = document.querySelectorAll(".name-data")[3];

const engineerDesc = document.querySelectorAll(".desc-data")[3];

const engineerImg = document.querySelectorAll(".img-data")[3];



////////////////
// all values//
//////////////




// commander values

const comRolehtml = comRole.innerHTML;

const comNamehtml = comName.innerHTML;

const comDeschtml = comDesc.innerHTML;

const comImgSrc = comImg.src;



// specialist values

const specRolehtml = specRole.innerHTML;

const specNamehtml = specName.innerHTML;

const specDeschtml = specDesc.innerHTML;

const specImghtml = specImg.src;



// pilot values

const pilotRolehtml = pilotRole.innerHTML;

const pilotNamehtml = pilotName.innerHTML;

const pilotDeschtml = pilotDesc.innerHTML;

const pilotImghtml = pilotImg.src;



// engineer values

const engineerRolehtml = engineerRole.innerHTML;

const engineerNamehtml = engineerName.innerHTML;

const engineerDeschtml = engineerDesc.innerHTML;

const engineerImgSrc = engineerImg.src;












// default stuff

const defaultImg = document.querySelector(".default-img");

const defaultName = document.querySelector(".default-name");

const defaultDesc = document.querySelector(".default-desc");

const defaultRole = document.querySelector(".default-role");

const defaultImgSrc = defaultImg.src;




///////////////////
// all functions//
/////////////////

const curretSection = document.querySelector(".current-dot");

commander.addEventListener("click", function(){

  // if (commander != curretSection){

    document.querySelector(".default-img").src =
      "../assets/crew/image-douglas-hurley.png";

    defaultName.innerHTML = comNamehtml;

    defaultDesc.innerHTML = comDeschtml;

    defaultRole.innerHTML = comRolehtml;

    commander.classList.add("current-dot");
    
    specialist.classList.remove("current-dot");

    pilot.classList.remove("current-dot");

    pilot.classList.remove("current-dot");


  // }else{}

});



specialist.addEventListener("click", function(){

  if (specialist != curretSection){

    
    document.querySelector(".default-img").src =
      "../assets/crew/image-Mark-Shuttleworth.png";

    defaultName.innerHTML = specNamehtml;

    defaultDesc.innerHTML = specDeschtml;

    defaultRole.innerHTML = specRolehtml;
    
    defaultRole.style.width = "1000px";
    document.querySelector(".default-name").style.width = "1000px";

    specialist.classList.add("current-dot");
    
    engineer.classList.remove("current-dot");

    pilot.classList.remove("current-dot");

    commander.classList.remove("current-dot");


  }else{}

});



pilot.addEventListener("click", function(){

  if (pilot != curretSection){

    document.querySelector(".default-img").src = pilotImghtml;

    defaultName.innerHTML = pilotNamehtml;

    defaultDesc.innerHTML = pilotDeschtml;

    defaultRole.innerHTML = pilotRolehtml;

    pilot.classList.add("current-dot");
    
    specialist.classList.remove("current-dot");

    engineer.classList.remove("current-dot");

    commander.classList.remove("current-dot");


  }else{}

});






engineer.addEventListener("click", function(){

  if (engineer != curretSection){

    document.querySelector(".default-img").src =
      "../assets/crew/image-anousheh-ansari.png";

    defaultName.innerHTML = engineerNamehtml;

    defaultDesc.innerHTML = engineerDeschtml;

    defaultRole.innerHTML = engineerRolehtml;

    defaultRole.style.width = "1000px";
    defaultName.style.width = "1000px";

    engineer.classList.add("current-dot");
    
    specialist.classList.remove("current-dot");

    pilot.classList.remove("current-dot");

    commander.classList.remove("current-dot");


  }else{}

});
















const userswidth = window.innerWidth;

const root = document.querySelector(":root");

var rootStyle = getComputedStyle(root);

root.style.setProperty("--screen-width", userswidth);








const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector("nav ul");

ham.addEventListener("click", function(){

  ul.classList.add("translated");

  ham.classList.add("hidden2");

  close.classList.remove("hidden2");

});



close.addEventListener("click", function(){

  ul.classList.remove("translated");

  ham.classList.remove("hidden2");

  close.classList.add("hidden2");

});