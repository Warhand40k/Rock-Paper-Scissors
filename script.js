function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return (choice === 0) ? 'ROCK':(choice === 1) ? 'PAPER':'SCISSORS';
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! ${humanChoice} does not beat ${computerChoice}`)
        } else {
            switch (humanChoice) {
                case 'ROCK':
                    if(computerChoice === 'PAPER') {
                        console.log("You lose! PAPER beats ROCK");
                        computerScore += 1;
                    } else if(computerChoice === 'SCISSORS') {
                        console.log("You win! ROCK beats SCISSORS");
                        humanScore += 1;
                    }

                    break;
                
                case 'PAPER':
                    if(computerChoice === 'SCISSORS') {
                        console.log("You lose! SCISSORS beats PAPER");
                        computerScore += 1;
                    } else if(computerChoice === 'ROCK') {
                        console.log("You win! PAPER beats ROCK");
                        humanScore += 1;
                    }

                    break;
                
                case 'SCISSORS':
                    if(computerChoice === 'ROCK') {
                        console.log("You lose! ROCK beats SCISSORS");
                        computerScore += 1;
                    } else if(computerChoice === 'PAPER') {
                        console.log("You win! SCISSORS beats PAPER");
                        humanScore += 1;
                    }

                    break;

                default:
                    console.log("Invalid choice! Try again");
                    playRound(getHumanChoice(), getComputerChoice());
            }
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
