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

console.log(getHumanChoice());
