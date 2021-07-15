var rand1 = Math.floor((Math.random()*6) + 1);
var rand2 = Math.floor((Math.random()*6) + 1);
var randimage1 = "images/dice" + rand1 + ".png";
var randimage2 = "images/dice" + rand2 + ".png";
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randimage1);
image2.setAttribute("src",randimage2);
var winner = document.querySelector("h1").innerHTML
if(rand1>rand2){
    document.querySelector("h1").innerHTML = "player 1 wins 😎"
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🤠"
}
else {
    document.querySelector("h1").innerHTML = "DREAW !!!"
}