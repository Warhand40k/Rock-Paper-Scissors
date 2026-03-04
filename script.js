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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

            default:
                console.log("Invalid choice! Try again");
                playRound(getHumanChoice(), getComputerChoice());
        }
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);

    if (humanScore > computerScore) {
        alert("You win!");
    } else if (humanScore === computerScore) {
        alert("It's a tie!");
    } else {
        alert("You lose!");
    }
}

playGame();
