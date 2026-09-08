var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource1 = "images/dice" + randomNumber1 + ".png"; 

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png"; 

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];


image1.setAttribute("src", randomDiceSource1);

image2.setAttribute("src", randomDiceSource2);

var suiii = "https://youtu.be/rKWGV8SVmtE";

var itIsNotSoBad = "https://youtube.com/clip/UgkxIgE0yyObHBzryLYAa7ZSO-kAb6WH5l5Q";

var callOfDuty = "https://youtu.be/_lLJGvygENo";



 if(randomNumber1 > randomNumber2) {
    document.querySelector(".h1").innerHTML = "🚩 player 1 wins.";

    document.querySelector(".p1").innerHTML = "player 1 won";

    document.querySelector(".img1").classList.add("img1-win");

    document.querySelector(".img2").classList.add("img2-lose"); 
    
    document.querySelector(".p2").innerHTML = "player 2 lost";

    document.querySelector(".p1").classList.add("p1-win");

    document.querySelector(".p2").classList.add("p2-lose");

    document.getElementById("a1").setAttribute("href", suiii);

    document.getElementById("a2").setAttribute("href", itIsNotSoBad);
 }

 else if(randomNumber2 > randomNumber1) {
    document.querySelector(".h1").innerHTML ="🚩 player 2 wins.";

    document.querySelector(".p2").innerHTML = "player 2 won";
    
    document.querySelector(".img2").classList.add("img2-win");

    document.querySelector(".img2").classList.add("img2-win");

    document.querySelector(".p1").innerHTML = "player 1 lost";

    document.querySelector(".p2").classList.add("p2-win");

    document.querySelector(".p1").classList.add("p1-lose");

    document.getElementById("a2").setAttribute("href", suiii);

    document.getElementById("a1").setAttribute("href", itIsNotSoBad);
 }

 else{
    document.querySelector(".h1").innerHTML = " suiii!";

    document.querySelector(".img1").classList.add("img1-lose");

    document.querySelector(".img2").classList.add("img2-lose");

    document.querySelector(".p1").innerHTML = "Fuck you 😠";
    
    document.querySelector(".p2").innerHTML = "😠 Fuck you too";

    document.querySelector(".p1").classList.add("p1-lose");

    document.querySelector(".p2").classList.add("p2-lose");

    document.getElementById("a2").setAttribute("href", callOfDuty);

    document.getElementById("a1").setAttribute("href", callOfDuty);
 }