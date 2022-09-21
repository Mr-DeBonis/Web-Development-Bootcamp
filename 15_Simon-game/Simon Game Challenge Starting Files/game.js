var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
    userClickedPattern = [];
    
    $('h1').text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];


    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeOut(200).fadeIn(200);

    playSound(randomChosenColour);

    level++;
}

function playSound(name){
    // Play button sound
    var sound = new Audio('./sounds/' + name + '.mp3');
    sound.play();
}


async function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    await sleep(100);
    $('#' + currentColour).removeClass("pressed");
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    var equals = true;
    
    if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]){
        equals = false;
    } 

    if(equals){
        console.log('Success!');
    } else {
        console.log('Wrong');
    }
}

//////////////////////////////////////////////////
var level = 0;

$(document).keypress(function(event){
    nextSequence();
})


$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

    if(userClickedPattern.length === gamePattern.length){
        console.log('hola');
        setTimeout(() => {
            nextSequence();
        }, 1000);
    }
});

