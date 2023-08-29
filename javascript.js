function randomComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0) return "rock";
    else if(random == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let state = null;
    switch(true) {

        case playerSelection == computerSelection: return "It's a tie";
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "rock": state = "Win"; break;
        case computerSelection == "rock" && playerSelection == "scissors":
        case computerSelection == "scissors" && playerSelection == "paper":
        case computerSelection == "paper" && playerSelection == "rock": state = "Lose";

    }
    if(!state) return null;
    else if(state == "Lose") return `You ${state}! ${computerSelection} beats ${playerSelection}`;
    else return `You ${state}! ${playerSelection} beats ${computerSelection}`;
    }


function game() {
    let c = 0;
    let u = 0;
    while(c != 5 && u != 5){
        let computerChoice = randomComputerChoice();
        let userChoice = prompt("Choose").toLowerCase();
        let msg = playRound(userChoice, computerChoice);
        while(!msg) {
            console.log("type choices correctly");
            userChoice = prompt("Choose").toLowerCase();
            msg = playRound(userChoice, computerChoice);
        }
        console.log(msg);
        let state = msg.charAt(4); 
        switch(state){
            case "L": c++; break;
            case "W": u++; break;
        }
        console.log(`score is user: ${u} vs computer: ${c}`)
    }
    if(c == 5) console.log("You Lost the Game");
    else console.log("You Won the Game, Congratulations");
}