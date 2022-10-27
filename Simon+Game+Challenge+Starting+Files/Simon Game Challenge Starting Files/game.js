
let buttonColors = ['red', 'blue', 'green', 'yellow']

let gamePattern = []
let userClickPattern = []

let started = false

let level = 0

//start game when a key is pressed
$(document).keydown(function(){
    if (!started){

        //Changes title to level, runs nextsequence, makes started true so a keypress won't restart game
        $("#level-title").text(`Level ${level}`)
        nextSequence()
        started = true
    }
   
})

$('.btn').click(function(){

    //store id of clicked button in a variable
    let userChosenColor = $(this).attr('id')

    //push clicked button onto user pattern array
    userClickPattern.push(userChosenColor)

    //play sound according to button clicked
    playSound(userChosenColor)

    //click animation
    animatePress(userChosenColor)

    //check pattern
    checkAnswer(userClickPattern.length - 1)

})

function nextSequence(){

    //reset user click pattern
    userClickPattern = []

    //increase level
    level ++

    //change title to the level you're on
    $('#level-title').text(`Level ${level}`)

    //generate random pattern
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    //Flash animation for pattern
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100)

    //playing audio associated with color
    playSound(randomChosenColor)
    
}

function playSound(name){

    //playing audio associated with color
    let colorAudio = new Audio(`sounds/${name}.mp3`)
    colorAudio.play()
}

function animatePress(currentColor){
    
    //adding pressed class to button pressed
    $(`#${currentColor}`).addClass('pressed')

    //timeout to remove class after 1 second
    setTimeout(function () {
        $(`#${currentColor}`).removeClass('pressed')
    }, 100)
}

function checkAnswer(currentLevel){

    //Checking if user has the most recent answer correct
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]){
        console.log('success')

        //check if sequence is finished and start next sequence
        if (userClickPattern.length === gamePattern.length){

            setTimeout(function (){
                nextSequence()
            }, 1000)
        }

    }else{

        console.log('wrong')

        //play wrong sound and flash screen red
        playSound('wrong')

        $('body').addClass("game-over")

        setTimeout(function(){
            $('body').removeClass('game-over')
        }, 200)

        $('#level-title').text(`Game Over, Press Any Key to Restart`)

        startOver()
    }

}

function startOver(){
    level = 0
    gamePattern = []
    started = false
}
