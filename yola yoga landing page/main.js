const browseMore = document.querySelector(".fourth-sec .more");

const button = document.querySelector(".fourth-sec .button");

const browseLess = document.querySelector(".less");

const courses = document.querySelector(".courses-containers");

browseMore.addEventListener("click", function(){

    courses.classList.add("show-all");

    browseLess.classList.remove("hidden");

    browseMore.classList.add("hidden");

});


browseLess.addEventListener("click", function(){

    courses.classList.remove("show-all");

    browseLess.classList.add("hidden");

    browseMore.classList.remove("hidden");

});

const trent = document.querySelector(".trent");

const emily = document.querySelector(".emily");

const mohammad = document.querySelector(".mohammad");

const trentDot = document.querySelector(".trent-dot");

const emilyDot = document.querySelector(".emily-dot");

const mohammadDot = document.querySelector(".mohammad-dot");

const mohammadInnerDot = document.querySelector(".mohammad-dot .inner-dot");

const emilyInnerDot = document.querySelector(".emily-dot .inner-dot");

const trentInnerDot = document.querySelector(".trent-dot .inner-dot");

trentDot.addEventListener("click", function () {
  trentInnerDot.classList.add("active");
  emilyInnerDot.classList.remove("active");
  mohammadInnerDot.classList.remove("active");

  trent.classList.remove("translated");
  emily.classList.add("translated");
  mohammad.classList.add("translated");
});


mohammadDot.addEventListener("click", function () {
  mohammadInnerDot.classList.add("active");
  emilyInnerDot.classList.remove("active");
  trentInnerDot.classList.remove("active");

  mohammad.classList.remove("translated");
  emily.classList.add("translated");
  trent.classList.add("translated");
});


emilyDot.addEventListener("click", function () {
  emilyInnerDot.classList.add("active");
  trentInnerDot.classList.remove("active");
  mohammadInnerDot.classList.remove("active");

  emily.classList.remove("translated");
  trent.classList.add("translated");
  mohammad.classList.add("translated");
});

// mobile menu 

const ham = document.querySelector(".ham");

const close = document.querySelector(".close")

const menu = document.querySelector(".mob-menu")

ham.addEventListener("click", function(){
  close.classList.remove("hidden");
  
  ham.classList.add("visibility");

  menu.classList.remove("tran");
});

close.addEventListener("click", function(){
  ham.classList.remove("visibility");

  close.classList.add("hidden");

  menu.classList.add("tran");
});