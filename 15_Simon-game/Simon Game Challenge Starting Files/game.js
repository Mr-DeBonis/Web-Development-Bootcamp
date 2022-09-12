var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

console.log(randomChosenColour);

gamePattern.push(randomChosenColour);

myButton = $(randomChosenColour);