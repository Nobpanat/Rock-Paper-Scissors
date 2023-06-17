const arrayOfChoice = ["Rock","Paper","Scissors"];


function getComputerChoice(){
    return arrayOfChoice[(Math.floor(Math.random() * arrayOfChoice.length))];
    
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return console.log("You draw");
    }

    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return console.log("You Lose! Paper beats Rock");
    }
    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return console.log("You Win! Rock beats scissors");
    }
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return console.log("You Win! Paper beats Rock");
    } 
    if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return console.log("You Lose! Scissors beats Paper");
    }
    if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return console.log("You Lose! Rock beats Scissors");
    }
    if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return console.log("You Win! Scissors beats Paper");
    } 
}
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
playRound(playerSelection,computerSelection);
console.log(playerSelection," ",computerSelection);
