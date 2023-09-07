let pc = 0;
let user = 0;

const score = document.querySelector('.score');
const info = document.querySelector('.info');

score.textContent = `Computer(${pc}) - User(${user})`;
info.textContent = 'Press Rock, Paper or Scissors';

function initiatePlay(e){
    let userChoice = e.target.dataset.key;
    let computerChoice = randomComputerChoice();
    playRound(userChoice, computerChoice);
    
}
let buttons = document.querySelector('.buttons');

buttons.childNodes.forEach(button => button.addEventListener('click', initiatePlay));

function playRound(playerSelection, computerSelection) {
    let state = null;
    switch(true) {

        case playerSelection == computerSelection: break;
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "rock": state = "Win"; break;
        case computerSelection == "rock" && playerSelection == "scissors":
        case computerSelection == "scissors" && playerSelection == "paper":
        case computerSelection == "paper" && playerSelection == "rock": state = "Lose";

    }
    if(!state) info.textContent = "Its a tie";
    else if(state == "Lose") {
        info.textContent = `You ${state}! ${computerSelection} beats ${playerSelection}`;
        pc++;
    }
    else {
        info.textContent = `You ${state}! ${playerSelection} beats ${computerSelection}`;
        user++;
    }
    score.textContent = `Computer(${pc}) - User(${user})`
    if(pc == 5 || user == 5) stopGame();
    }

function randomComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0) return "rock";
    else if(random == 1) return "paper";
    else return "scissors";
}

let restart = document.createElement('button');
restart.textContent = 'Play Again!';
restart.addEventListener('click', reset);

function stopGame(){
    if(pc == 5) 
        info.textContent = 'Computer Won, better luck next time );';
    else 
        info.textContent = 'You Won, Way to go (;';
    
    buttons.remove();
    document.querySelector('body').appendChild(restart);
    }

function reset(){
    pc = 0;
    user = 0;
    score.textContent = `Computer(${pc}) - User(${user})`;
    info.textContent = 'Press Rock, Paper or Scissors';
    restart.remove();
    document.querySelector('body').appendChild(buttons);
}