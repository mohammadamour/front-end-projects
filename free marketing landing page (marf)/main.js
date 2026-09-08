// mobile preview ul menu
const ham = document.querySelector(".ham");

const close = document.querySelector(".close");

const ul = document.querySelector(".mob-menu");

ham.addEventListener("click", function () {
  ul.classList.remove("tran");

  close.classList.remove("hidden");

  ham.classList.add("hidden");
});

close.addEventListener("click", function () {
  ul.classList.add("tran");

  close.classList.add("hidden");

  ham.classList.remove("hidden");
});
