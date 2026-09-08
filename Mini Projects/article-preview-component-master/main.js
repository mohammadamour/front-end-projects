const share = document.querySelector(".icons");

const shareButton = document.querySelector(".share-icon");

shareButton.addEventListener("click", function(){
    share.classList.toggle("hidden");
});