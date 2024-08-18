let arr = ["rock" , "paper" , "scissors"];
let btn = document.getElementsByClassName("btn");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementById("result");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let playerS = 0;
let computerS = 0;

let playChoice;
function play(playChoice){
    
    let computerChoice = arr[Math.floor(Math.random() * 3)];
    let res = "";
    if(playChoice === computerChoice){
        res = "It's a tie";
    }
    else{
        switch(playChoice){
            case "rock":
                res = (computerChoice === "scissors") ? "you win" : "you lose";
                break;
            case "paper":
                res = (computerChoice === "rock") ? "you win" : "you lose";
                break;
            case "scissors":
                res = (computerChoice === "paper") ? "you win" : "you lose";
                break;
        }
    }
    player.textContent = `player: ${playChoice}`;
    computer.textContent = `computer: ${computerChoice}`;
    result.textContent = `result: ${res}`;
    switch(res){
        case "you win":
            playerS++;
            playerScore.textContent = playerS;
            break;
        case "you lose":
                computerS++;
                computerScore.textContent = computerS;
                break;
    }
}




