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

// launch stuff

const launch = document.querySelector(".launch");

const launchName = document.querySelector(".launch-name");

const launchDesc = document.querySelector(".launch-desc");

const launchImgDesk = document.querySelector(".launch-img-desk");

const launchImgTab = document.querySelector(".launch-img-tab");

const launchImgMob = document.querySelector(".launch-img-mob");


// cap stuff

const cap = document.querySelector(".capsule");

const capName = document.querySelector(".capsule-name");

const capDesc = document.querySelector(".capsule-desc");

const capImgDesk = document.querySelector(".capsule-img-desk");

const capImgTab = document.querySelector(".capsule-img-tab");

const capImgMob = document.querySelector(".capsule-img-mob");


// port stuff

const port = document.querySelector(".spaceport");

const portName = document.querySelector(".spaceport-name");

const portDesc = document.querySelector(".spaceport-desc");

const portImgDesk = document.querySelector(".spaceport-img-desk");

const portImgTab = document.querySelector(".spaceport-img-tab");

const portImgMob = document.querySelector(".spaceport-img-mob");



////////////////
// all values//
//////////////




// launch values

const launchNameHtml = launchName.innerHTML;

const launchDescHtml = launchDesc.innerHTML;

const launchImgDeskSrc = launchImgDesk.src;

const launchImgTabSrc = launchImgTab.src;
console.log(launchImgTabSrc);

const launchImgMobSrc = launchImgMob.src;



// cap values

const capNameHtml = capName.innerHTML;

const capDescHtml = capDesc.innerHTML;

const capImgSrcDesk = capImgDesk.src;

const capImgSrcTab = capImgTab.src;

const capImgMobSrc = capImgMob.src;


// port values


const portNameHtml = portName.innerHTML;

const portDescHtml = portDesc.innerHTML;

const portImgSrcDesk = portImgDesk.src;

const portImgSrcTab = portImgTab.src;

const portImgMobSrc = portImgMob.src;









// default stuff

const defaultDeskImg = document.querySelector(".default-img-desk");

const defaultTabImg = document.querySelector(".default-img-tab");

const defaultMobImg = document.querySelector(".default-img-mob");

const defaultName = document.querySelector(".default-name");

const defaultDesc = document.querySelector(".default-desc");




///////////////////
// all functions//
/////////////////

const curretSection = document.querySelector(".current-circle");

launch.addEventListener("click", function(){

  // if (launch != curretSection){

    defaultDeskImg.src = launchImgDeskSrc;
    defaultTabImg.src = launchImgTabSrc;
    defaultMobImg.src = launchImgMobSrc;

    defaultName.innerHTML = launchNameHtml;

    defaultDesc.innerHTML = launchDescHtml;

    launch.classList.add("current-circle");
    
    cap.classList.remove("current-circle");

    port.classList.remove("current-circle");

  // }else{}

});

  cap.addEventListener("click", function(){

    if(cap != curretSection){

      defaultDeskImg.src = capImgSrcDesk;
      defaultTabImg.src = capImgSrcTab;
      defaultMobImg.src = capImgMobSrc;
  
     defaultName.innerHTML = capNameHtml;
    
     defaultDesc.innerHTML = capDescHtml;
    
     cap.classList.add("current-circle");
    
     port.classList.remove("current-circle");

     launch.classList.remove("current-circle");
    
    }else{}
   
  });



  port.addEventListener("click", function(){

    if(port != curretSection){

      defaultDeskImg.src = portImgSrcDesk;
      defaultTabImg.src = portImgSrcTab;
      defaultMobImg.src = portImgMobSrc;
  
     defaultName.innerHTML = portNameHtml;
    
     defaultDesc.innerHTML = portDescHtml;
    
     port.classList.add("current-circle");
    
     launch.classList.remove("current-circle");

     cap.classList.remove("current-circle");
    
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