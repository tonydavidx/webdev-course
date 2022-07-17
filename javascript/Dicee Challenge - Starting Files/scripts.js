var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomImageSource2);

// if else statement to decide which player wins 
// if else statement based on greater number

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One wins 🚩"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player Two Wins 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}