var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

console.log(randomChosenColour);

gamePattern.push(randomChosenColour);

$('#' + randomChosenColour).fadeOut(200).fadeIn(200);

// Play button sound
var buttonSound = new Audio('./sounds/' + randomChosenColour + '.mp3');
buttonSound.play()

