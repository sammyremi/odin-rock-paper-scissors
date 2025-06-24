console.log("Rock Paper Scissors Game");

const gameChoice = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randNum = Math.random() * 3;
    return gameChoice[Math.floor(randNum)];
}

function getHumanChoice(){
    choice = prompt("Enter your choice: 'rock' 'paper' or 'scissors'")
    return choice.toLowerCase()
}

function playRound(humanChoice, getComputerChoice){
    console.log(`Your choice: ${humanChoice}  ====================  Computer choice: ${getComputerChoice}`)
   
    switch (humanChoice){
        case "rock":
            if (getComputerChoice === "scissors"){
                console.log("You win! Rock beats Scissors")
                humanScore += 1
            }else if (getComputerChoice === "paper"){
               console.log("You lose! Paper beats Rock")
               computerScore += 1
            }else{
                console.log("Draw same choice")
            }
            break
        case "paper":
            if  (getComputerChoice === "rock"){
                console.log("You win! Paper beats Rock")
                humanScore += 1
            }else if (getComputerChoice === "scissors"){
                console.log("You lose! Scissors beats Paper")
                computerScore += 1
            }else{
                console.log("Draw same choice")
            }
            break
        case "scissors":
            if (getComputerChoice === "paper"){
                console.log("You win! Scissors beats Paper")
                humanScore += 1
            }else if (getComputerChoice === "rock"){
                console.log("You lose! Scissors beats Rock")
                 computerScore += 1
            }else {
                console.log("Draw same choice")
            }
            break
        default:
            console.log("invalid selection")
            return 
    }
    console.log(`Your score: ${humanScore} vs Computer score: ${computerScore}`)
}



function playGame(playTime){
    while (0 < playTime){
        playRound(getHumanChoice(), getComputerChoice())
        playTime--
    }

    if (humanScore > computerScore){
        console.log("You are the Winner")
    }else if(humanScore === computerScore){
        console.log("The Game Ended Draw")
    }else{
        console.log("You lost to Computer")
    }
    console.log(`Scores: ${humanScore} - ${computerScore}`)
}

playGame(5)

