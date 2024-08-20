






// Goal: Function to generate random computer choice
// Steps: (1) Generate a random number between 0-2, 
// (2) Use switch statement to turn this number into an option

function getComputerChoice() {
    // Step 1:
    let randomNumber = Math.floor(Math.random() * 3);
    
    // Step 2:
    let choice;

    switch (randomNumber) {
        case 0:
            choice = "Rock";
            break;

        case 1:
            choice = "Paper";
            break;

        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
}

// Goal: Function to take user for a choice

function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper, or Scissors: ");
    return choice;
}

