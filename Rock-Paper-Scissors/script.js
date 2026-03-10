const choices = ["rock","paper","scissors"];
const playerDisplay=document.getElementById("playDisplay");
const ComputerDisplay=document.getElementById("ComputerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const ComputerscoreDisplay = document.getElementById("ComputerscoreDisplay");

let playerscore = 0;
let Computerscore = 0;

function playgame(playerChoice){
    const ComputerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";

    if(playerChoice===ComputerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case"rock":
            result=(ComputerChoice==="scissors")?"YOU WIN!":"YOU LOSE!";
            break;
            case"paper":
            result=(ComputerChoice==="rock")?"YOU WIN!":"YOU LOSE!";
            break;
            case"scissors":
            result=(ComputerChoice==="paper")?"YOU WIN!":"YOU LOSE!";
            break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    ComputerDisplay.textContent = `Computer: ${ComputerChoice}`;
    resultDisplay.textContent= result;

    resultDisplay.classList.remove("greentext","redtext");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greentext");
            playerscore++;
            playerscoreDisplay.textContent = playerscore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redtext");
            Computerscore++;
            ComputerscoreDisplay.textContent = Computerscore;
            break;
    }

}