console.log("Rock Paper Scissors Game");
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

    switch (humanChoice){
        case "rock":
            if (getComputerChoice === "scissors"){
                console.log("You win! Rock beats Scissors")
                break
            }else if (getComputerChoice === "paper"){
               console.log("You lose! Paper beats Rock")
               break
            }else{
                console.log("Draw same choice")
            }
        case "paper":
            if  (getComputerChoice === "rock"){
                console.log("You win! Paper beats Rock")
                break
            }else if (getComputerChoice === "scissors"){
                console.log("You lose! Scissors beats Paper")
                break
            }else{
                console.log("Draw same choice")
            }
        case "scissors":
            if (getComputerChoice === "paper"){
                console.log("You win! Scissors beats Paper")
                break
            }else if (getComputerChoice === "rock"){
                console.log("You lose! Scissors beats Rock")
                break
            }else {
                console.log("Draw same choice")
            }
        default:
            return "invalid selection"
    }
}


const humanSelection = getHumanChoice(humanChoice);
const computerSelection = getComputerChoice();

function playGame(){
    console.log(playRound(humanChoice, getComputerChoice()))
}

playGame()