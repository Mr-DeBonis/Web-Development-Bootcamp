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


function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(() => {
        $('#' + currentColour).removeClass("pressed");
    }, 100);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        
        console.log('Success!');

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }

    } else{
        
        console.log('Wrong');
        playSound('wrong');

        $('body').addClass("game-over");
        setTimeout(() => {
            $('body').removeClass("game-over");;
        }, 200);
        
        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();

    }
}

function startOver() {
    // Restart game
    level = 0;
    gamePattern = [];
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
});

