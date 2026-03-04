function getComputerChoice() {
    let choice = parseInt(Math.random() * 10) % 3;
    
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

console.log(getComputerChoice())
