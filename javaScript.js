

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    let textHuman = prompt("Please enter rock, paper or scissors:");
    textHuman = textHuman.toLowerCase();
    return textHuman;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}
playGame();