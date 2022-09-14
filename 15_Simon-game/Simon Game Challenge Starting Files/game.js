var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];

    //console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeOut(200).fadeIn(200);
    // Play button sound
    playSound(randomChosenColour);
}

function playSound(name){
    var sound = new Audio('./sounds/' + name + '.mp3');
    sound.play();
}


nextSequence();

$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    
});
