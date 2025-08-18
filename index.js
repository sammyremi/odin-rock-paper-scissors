console.log("Rock Paper Scissors Game");

let score = document.querySelector(".result")

const gameChoice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let choice = ""
createButtons()


function getComputerChoice(){
    let randNum = Math.random() * 3;
    return gameChoice[Math.floor(randNum)];
}


function playRound(humanChoice, getComputerChoice){
    console.log(humanChoice, getComputerChoice)

    switch (humanChoice){
        case "rock":
            if (getComputerChoice === "scissors"){
                return(["You win! Rock beats Scissors", "win"])
            }else if (getComputerChoice === "paper"){
               return(["You lose! Paper beats Rock", "lose"])
            }else{
                return(["Draw same choice", "draw"])
            }

        case "paper":
            if  (getComputerChoice === "rock"){
                return (["You win! Paper beats Rock", "win"])
            }else if (getComputerChoice === "scissors"){
                return(["You lose! Scissors beats Paper", "lose"])
            }else{
                return(["Draw same choice", "draw"])
            }

        case "scissors":
            if (getComputerChoice === "paper"){
                return(["You win! Scissors beats Paper", "win"])
            }else if (getComputerChoice === "rock"){
                return(["You lose! Rock beats Scissors", "lose"]) 
            }else {
                return(["Draw same choice", "draw"])
            }
        default:
            return "invalid selection"
    }
    
}

function createButtons(){
    const btn = document.querySelector(".buttons")

    let rock = document.createElement("button")
    let paper = document.createElement("button")
    let scissors = document.createElement("button")

    rock.setAttribute("class", "button")
    rock.textContent = "Rock"

    paper.setAttribute("class", "button")
    paper.textContent = "Paper"

    scissors.setAttribute("class", "button")
    scissors.textContent = "Scissors"

    btn.appendChild(rock)
    btn.appendChild(paper)
    btn.appendChild(scissors)

}

function score0(){
    humanScore = 0
    computerScore = 0
}


function gameOver(){

    if (humanScore == 5){
        score0()
        return [true, "You win"]
    }else if (computerScore == 5){
        score0()
        return [true, "You Lose"]
    }
}

const play = document.querySelector(".buttons")
const btns = document.querySelectorAll(".button")
// const result = document.querySelector(".result")
const container = document.querySelector("#container")
let h5 = document.createElement('h5')
container.appendChild(h5)

btns.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        choice = button.textContent.toLowerCase()
        const winner = playRound(choice, getComputerChoice())
        if (winner[1] == 'draw'){
        }else if (winner[1] == 'win'){
            humanScore += 1
        }else if (winner[1] == 'lose'){
            computerScore += 1
        }
        score.textContent = `Scores: You: ${humanScore} - Computer: ${computerScore}`
        score.value = winner[0]

        h5.textContent = score.value

        if (humanScore == 5 || computerScore == 5){
            let ans = gameOver()
            alert(ans[1])
        }

    });
        
});









