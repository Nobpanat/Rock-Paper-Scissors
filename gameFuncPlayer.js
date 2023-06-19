let arrayOfId = ["rock","paper","scissors"];

let player1 = "";
let player2 = "";
let result;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let click2time = 0;
let count = 0;

function playerSelect1(element){
    
    for(let i=0; i<arrayOfId.length; i++){
        if(player1.match(arrayOfId[i])){
            return;
        }
    }
    player1 = element.id ;

}

function playerSelect2(element){

    for(let i=0; i<arrayOfId.length; i++){
        if(player2.match(arrayOfId[i])){
            return;
        }
    }
    player2 = element.id ;
}

function gameRoundPVP(){
    if(player1 === player2){
        result = "You draw";
        document.getElementById("gameResult").innerHTML = result;
    }
    else if((player1 == "rock" && player2 == "scissors") || 
    (player1 == "paper" && player2 == "rock") || (player1 == "scissors" && player2 == "paper")){
        result = "Player1 win! " + player1 + " beat " + player2;
        document.getElementById("gameResult").innerHTML = result;
        scorePlayer1++;
    }
    else {
        result = "Player2 win! " + player2 + " beat " + player1;
        document.getElementById("gameResult").innerHTML = result;
        scorePlayer2++;
    }

    document.getElementById("countPlayer1").innerHTML = "Player1 : " + scorePlayer1;
    document.getElementById("countPlayer2").innerHTML = "Player2 : " + scorePlayer2;

    if(scorePlayer1 == 5){
        result = "Player1 win! " + player1 + " beat " + player2 +  " and Player1 win! this round";
        document.getElementById("gameResult").innerHTML = result;
        scorePlayer1 = 0;
        scorePlayer2 = 0;
    }

    if(scorePlayer2 == 5){
        result = "Player2 win! " + player2 + " beat " + player1 +  " and Player2 win! this round";
        document.getElementById("gameResult").innerHTML = result;
        scorePlayer1 = 0;
        scorePlayer2 = 0;
    }
}

function showImage(){
    let scorePlayer1 = document.getElementById("scorePlayer1");
    let imgPlayer1 = document.getElementById(player1);
    let scorePlayer2 = document.getElementById("scorePlayer2");
    let imgPlayer2 = document.getElementById(player2);
    scorePlayer1.src = imgPlayer1.src;
    scorePlayer2.src = imgPlayer2.src;
}


function reset(){
        player1 = "";
        player2 = "";

}

function gameStartPVP(element){
    click2time++;
    if(click2time == 1){
        playerSelect1(element);
    }
    
    else if(click2time == 2){
        playerSelect2(element);
        gameRoundPVP();
        showImage();
        reset();
        click2time = 0;
    }

    

}


// var scalingInputs = document.querySelectorAll('.inputImg');

// scalingInputs.forEach(function(input) {
//   input.addEventListener('mouseover', function() {
//     input.style.transform = 'scale(1.2)';
//   });

//   input.addEventListener('mouseout', function() {
//     input.style.transform = 'scale(1)';
//   });
// });