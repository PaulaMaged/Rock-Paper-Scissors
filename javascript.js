function randomComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0) return "rock";
    else if(random == 1) return "paper";
    else return "scissors";
}

let computerChoice = randomComputerChoice();
let userChoice = prompt("Choose").toLowerCase();

function playRound(playerSelection, computerSelection) {
    let state = "Lose";
    switch(true) {

        case playerSelection == computerSelection: return "It's a tie";
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "rock": state = "Win";

    }
    if(state == "Lose") return `You ${state}! ${computerSelection} beats ${playerSelection}`;
    else return `You ${state}! ${playerSelection} beats ${computerSelection}`;
    }