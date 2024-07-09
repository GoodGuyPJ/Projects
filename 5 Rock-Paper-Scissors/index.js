//
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay"); 
const playerScoreDisplay = document.getElementById("playerScoreDisplay"); 
let playerScore =0;
let computerScore = 0;

 function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice);
    let result = "";
    if(playerChoice === computerChoice){
        result = "Its A tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOOSE";
                break;
        }
    }

    playerDisplay.textContent = `player: ${playerChoice}`;
    computerDisplay.textContent = `player: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
 }