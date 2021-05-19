// FIRST DICE

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage);


// SECOND DICE

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceImage);


// MANIPULATING THE TITTLE

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Cool Mudu Wins!";
}

else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Oops, You won!";
}
 else if (randomNumber1 === randomNumber2){
     document.querySelector("h1").innerHTML = "Draw!";
 }