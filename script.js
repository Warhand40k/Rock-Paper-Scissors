let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = parseInt(Math.random() * 10) % 3;
    
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    switch (humanChoice) {
        case 'rock':
            if(computerChoice === 'paper') {
                console.log("You lose! Paper beats Rock");
                computerScore += 1;
            } else if(computerChoice === 'scissors') {
                console.log("You win! Rock beats Scissors");
                humanScore += 1;
            } else {
                console.log("Tie! rock does not beat rock");
            }

            break;
        
        case 'paper':
            if(computerChoice === 'scissors') {
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
            } else if(computerChoice === 'rock') {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
            } else {
                console.log("Tie! Paper does not beat Paper");
            }

            break;
        
        case 'scissors':
            if(computerChoice === 'rock') {
                console.log("You lose! Rock beats Scissors");
                computerScore += 1;
            } else if(computerChoice === 'paper') {
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
            } else {
                console.log("Tie! Scissors does not beat Scissors");
            }

            break;
    }

    console.log(humanScore)
    console.log(computerScore)
}

playRound(getHumanChoice(), getComputerChoice())
