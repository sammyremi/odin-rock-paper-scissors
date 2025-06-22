console.log("Rock Papper Scissors Game");
const humanChoice = prompt("Enter your choice: 'rock' 'paper' or 'scissors'")
const gameChoice = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randNum = Math.random() * 3;
    return gameChoice[Math.floor(randNum)];
}

function getHumanChoice(choice){
    return choice.toLowerCase()
}

function playRound(humanChoice, getComputerChoice){

    console.log(humanChoice, getComputerChoice)
}


const humanSelection = getHumanChoice(humanChoice);
const computerSelection = getComputerChoice();

function playGame(){
    let start = 0
    while (start < 5){
        playGame
    }
}

playGame()