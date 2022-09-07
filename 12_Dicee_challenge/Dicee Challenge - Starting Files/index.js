function getDiceValue(){
    // Returns random value between [1,6]
    return Math.floor(Math.random() * 6 + 1 );
}

function updateDicee(randomNumber, imageClass){
    document.querySelector(imageClass).setAttribute("src", "images/dice" + String(randomNumber) + ".png");
}

var randomNumber1 = getDiceValue();
var randomNumber2 = getDiceValue();

updateDicee(randomNumber1, ".img1");
updateDicee(randomNumber2, ".img2");

// Show which player won
var heading1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    heading1.innerHTML = "🏁 Play 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    heading1.innerHTML = "Play 2 Wins! 🏁";
} else{
    heading1.innerHTML = "Draw!";
}