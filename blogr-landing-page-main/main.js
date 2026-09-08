const arrowDesk1 = document.querySelectorAll(".arrow-desk")[0];

const arrowMob1 = document.querySelectorAll(".arrow-mob")[0];

const navItems1 = document.querySelectorAll(".nav-items")[0];

const ul1 = document.querySelectorAll(".nav-items ul")[0];

const title1 = document.querySelectorAll(".nav-title")[0];



const arrowDesk2 = document.querySelectorAll(".arrow-desk")[1];

const arrowMob2 = document.querySelectorAll(".arrow-mob")[1];

const navItems2 = document.querySelectorAll(".nav-items")[1];

const ul2 = document.querySelectorAll(".nav-items ul")[1];

const title2 = document.querySelectorAll(".nav-title")[1];




const arrowDesk3 = document.querySelectorAll(".arrow-desk")[2];

const arrowMob3 = document.querySelectorAll(".arrow-mob")[2];

const navItems3 = document.querySelectorAll(".nav-items")[2];

const ul3 = document.querySelectorAll(".nav-items ul")[2];

const title3 = document.querySelectorAll(".nav-title")[2];

const ham = document.querySelector(".ham");

const close = document.querySelector(".close");






const userScreen = window.screen.width;
console.log(userScreen);


// nav ul hover effects on desktop and moblie preview
if (userScreen > 1000){


    function onmouseItems1() {
                 
        navItems1.classList.add("nav-items-hovered");

        arrowDesk1.classList.add("rotated");
    }


    function outmouseItems1() {
                 
        navItems1.classList.remove("nav-items-hovered");

        arrowDesk1.classList.remove("rotated");
    }

    



    function onmouseItems2() {
                 
        navItems2.classList.add("nav-items-hovered");

        arrowDesk2.classList.add("rotated");
    }


    function outmouseItems2() {
                 
        navItems2.classList.remove("nav-items-hovered");

        arrowDesk2.classList.remove("rotated");
    }






    function onmouseItems3() {
                 
        navItems3.classList.add("nav-items-hovered");

        arrowDesk3.classList.add("rotated");
    }


    function outmouseItems3() {
      navItems3.classList.remove("nav-items-hovered");

      arrowDesk3.classList.remove("rotated");
    }



}else{}






// if (userScreen < 600){
    
//     ham.addEventListener("click", function(){

//         ham.classList.add("hidden");

//         close.classList.remove("hidden");

//         ul.classList.

//     });

// }else{}