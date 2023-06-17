
let arrayOfId = ["rock","paper","scissors"];
// let arrayOfTest = [document.getElementById("rock"),document.getElementById("papers"),
//                     document.getElementById("scissor")];

let choicePlayer;
let choiceComputer;
let playerScore = 0;
let computerScore = 0;
let result;

function getComputer(){
    let scoreComputer = document.getElementById("scoreComputer");
    let randomIndex = Math.floor(Math.random() * arrayOfId.length);
    let randomImageId = arrayOfId[randomIndex];

    choiceComputer = arrayOfId[randomIndex];
    let randomImage = document.getElementById(randomImageId);
    // let randomIndexTest = Math.floor(Math.random() * arrayOfId.length);
    // scoreComputer.src = arrayOfTest[randomIndexTest].src;
    scoreComputer.src = randomImage.src;

    // (Math.floor(Math.random() * arrayOfChoice.length))
}






function changeImagePlayer(imageElement){
    let scorePlayer = document.getElementById("scorePlayer");
    scorePlayer.src = imageElement.src;
    choicePlayer = imageElement.id;
    // getComputer();
}


function gameRound(){
    if(choicePlayer === choiceComputer){
        result = "You draw";
        document.getElementById("gameResult").innerHTML = result;
    }
    else if((choicePlayer == "rock" && choiceComputer == "scissors") || 
        (choicePlayer == "paper" && choiceComputer=="rock") || (choicePlayer == "scissors" && choiceComputer == "paper")){
            result = "You win! " + choicePlayer + " beat " + choiceComputer;
            document.getElementById("gameResult").innerHTML = result;
            playerScore++;    
    }
    else { 
        result = "You lose! "+ choiceComputer +" beat "+ choicePlayer;
        document.getElementById("gameResult").innerHTML = result;
        computerScore++;
    }

    document.getElementById("countPlayer").innerHTML = "Player : " + playerScore;
    document.getElementById("countComputer").innerHTML = "Computer : " + computerScore;

    if(playerScore == 5 ){
        result = "You win! " + choicePlayer + " beat " + choiceComputer + " and You win! this round";
        document.getElementById("gameResult").innerHTML = result;
        playerScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5){
        result = "You lose! "+ choiceComputer +" beat "+ choicePlayer + " and Computer win! this round";
        document.getElementById("gameResult").innerHTML = result;
        playerScore = 0;
        computerScore = 0;
    }
}

var scalingInputs = document.querySelectorAll('.inputImg');

scalingInputs.forEach(function(input) {
  input.addEventListener('mouseover', function() {
    input.style.transform = 'scale(1.2)';
  });

  input.addEventListener('mouseout', function() {
    input.style.transform = 'scale(1)';
  });
});



function gameStart(imageElement){
    changeImagePlayer(imageElement);
    getComputer();
    gameRound();
}