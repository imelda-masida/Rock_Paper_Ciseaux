

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    let textHumain = prompt("Please enter rock, paper or scissors:");
    textHumain = textHumain.toLowerCase();
    return textHumain;
}
console.log(getHumanChoice());