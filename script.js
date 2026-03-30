const playButton = document.querySelector("#play-button");

playButton.addEventListener('click', () => {
    const screen = document.querySelector('#screen');
    const btnArea = document.querySelector("#button-area");

    const buttons = document.createElement('div');
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');

    buttons.setAttribute('id', 'buttons');

    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);

    const restart = document.createElement('button');

    const rockImg = document.createElement('img');
    const paperImg = document.createElement('img');
    const scissorsImg= document.createElement('img');
    restart.textContent = 'Restart';

    rockImg.setAttribute('src', './assets/icons/hand-rock.svg');
    rockImg.setAttribute('draggable', 'false');
    rockImg.style.width = '12vh';

    paperImg.setAttribute('src', './assets/icons/hand-paper.svg');
    paperImg.setAttribute('draggable', 'false');
    paperImg.style.width = '12vh';

    scissorsImg.setAttribute('src', './assets/icons/hand-scissors.svg');
    scissorsImg.setAttribute('draggable', 'false');
    scissorsImg.style.width = '12vh';

    rock.classList = 'btn';
    rock.id = 'ROCK';
    paper.classList = 'btn';
    scissors.classList = 'btn';
    restart.classList.add('restart-btn', 'kirang-haerang-regular');

    playButton.remove();

    btnArea.appendChild(buttons);
    btnArea.appendChild(restart);

    rock.appendChild(rockImg);
    paper.appendChild(paperImg);
    scissors.appendChild(scissorsImg);

    function playGame() {
        const messageArea = document.createElement('div');
        messageArea.id = 'message-area';

        const message = document.createElement('p');
        message.textContent = "> Welcome!"
        message.classList = 'messages';

        let humanScore = 0;
        let computerScore = 0;

        function handleRockClick() {
            playRound('ROCK', getComputerChoice());
        }

        function handlePaperClick() {
            playRound('PAPER', getComputerChoice());
        }

        function handleScissorsClick() {
            playRound('SCISSORS', getComputerChoice());
        }

        function getComputerChoice() {
            let choice = Math.floor(Math.random() * 3);
            return (choice === 0) ? 'ROCK':(choice === 1) ? 'PAPER':'SCISSORS';
        }

        const displayScore = () => {
            const score = document.createElement('p');
            score.textContent = `# You: ${humanScore}  Computer: ${computerScore}`;
            score.classList = 'score';
            messageArea.appendChild(score);
        }

        function playRound(humanChoice, computerChoice) {

            let status = '';
            if (humanChoice === computerChoice) {
                status = `It's a tie! ${humanChoice} does not beat ${computerChoice}`;
            } else {
                switch (humanChoice) {
                    case 'ROCK':
                        if(computerChoice === 'PAPER') {
                            computerScore++;
                            status = ("You lose! PAPER beats ROCK");
                        } else if(computerChoice === 'SCISSORS') {
                            humanScore++;
                            status = "You win! ROCK beats SCISSORS";
                        }

                        break;
                        
                    case 'PAPER':
                        if(computerChoice === 'SCISSORS') {
                            computerScore++;
                            status = "You lose! SCISSORS beats PAPER";
                        } else if(computerChoice === 'ROCK') {
                            humanScore++;
                            status = "You win! PAPER beats ROCK";
                        }

                        break;
                        
                    case 'SCISSORS':
                        if(computerChoice === 'ROCK') {
                            computerScore++;
                            status = "You lose! ROCK beats SCISSORS";
                        } else if(computerChoice === 'PAPER') {
                            humanScore++;
                            status = "You win! SCISSORS beats PAPER";
                        }
                }
            }
            const newMessage = document.createElement('p');
            newMessage.textContent = `> ${status}`;
            newMessage.classList = 'messages';
            messageArea.appendChild(newMessage);
            displayScore();
            if (humanScore === 5 || computerScore === 5) {
                const winner = document.createElement('p');
                winner.textContent = (humanScore === 5) ? "> *** YOU WIN! ***" : "> *** YOU LOSE! ***";
                winner.classList = 'messages';
                messageArea.appendChild(winner);
                rock.removeEventListener('click', handleRockClick);
                paper.removeEventListener('click', handlePaperClick);
                scissors.removeEventListener('click', handleScissorsClick);
            }
        }

        screen.appendChild(messageArea);
        messageArea.appendChild(message);
    
        rock.addEventListener('click', handleRockClick);
        paper.addEventListener('click', handlePaperClick);
        scissors.addEventListener('click', handleScissorsClick);
        restart.addEventListener('click', () => {
            messageArea.remove();
            playGame();
        }, {once: true});
    }

    playGame();
})
