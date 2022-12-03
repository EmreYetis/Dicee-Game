var randomNum1 = Math.floor((Math.random()*6)+1); //1-6

var randomDiceImg = "dice" + randomNum1 + ".png"; // dice1.png - dice6.png

var randomImgSource = "images/" + randomDiceImg; // images/dice1.png - images/dice6.png

var img1 = document.querySelector(".img1");

img1.setAttribute("src", randomImgSource);

var randomNum2;

var randomNum2 = Math.floor((Math.random()*6)+1); //1-6

var randomDiceImg = "dice" + randomNum2 + ".png"; // dice1.png - dice6.png

var randomImgSource = "images/" + randomDiceImg; // images/dice1.png - images/dice6.png

var img2 = document.querySelector(".img2");

img2.setAttribute("src", randomImgSource);


if (randomNum1>randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
else if (randomNum1<randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


