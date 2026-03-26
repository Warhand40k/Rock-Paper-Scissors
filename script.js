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
            return `It's a tie! ${humanChoice} does not beat ${computerChoice}`;
        } else {
            switch (humanChoice) {
                case 'ROCK':
                    if(computerChoice === 'PAPER') {
                        computerScore += 1;
                        return "You lose! PAPER beats ROCK";
                    } else if(computerChoice === 'SCISSORS') {
                        humanScore += 1;
                        return "You win! ROCK beats SCISSORS";
                    }

                    break;
                
                case 'PAPER':
                    if(computerChoice === 'SCISSORS') {
                        computerScore += 1;
                        return "You lose! SCISSORS beats PAPER";
                    } else if(computerChoice === 'ROCK') {
                        humanScore += 1;
                        return "You win! PAPER beats ROCK";
                    }

                    break;
                
                case 'SCISSORS':
                    if(computerChoice === 'ROCK') {
                        computerScore += 1;
                        return "You lose! ROCK beats SCISSORS";
                    } else if(computerChoice === 'PAPER') {
                        humanScore += 1;
                        return "You win! SCISSORS beats PAPER";
                    }

                    break;
            }
        }
    }

    const btn = document.querySelectorAll('button');
    const container = document.querySelector('div');
    const status = document.createElement('p');
    container.appendChild(status);
    const score = document.createElement('p');
    container.appendChild(score);

    btn.forEach((button) => {
        button.addEventListener('click', event => {
            const selection = event.target.id;
            status.textContent = playRound(selection, getComputerChoice());
            score.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
        });
    });
}

playGame();
