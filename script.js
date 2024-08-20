let humanScore = 0;
let computerScore = 0;

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

// Goal: Function to play a round
// Steps: (1) Make choices case-insensitive (2) Decide winner
// using conditionals (3) Print proper message

function playRound(humanChoice, computerChoice) {
    // Step 1:
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.substr(1).toLowerCase();
    computerChoice = computerChoice.slice(0,1).toUpperCase() + computerChoice.substr(1).toLowerCase();

    // Step 2/3:
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            console.log("It's a tie!");
        }

        else if (computerChoice == "Paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }

        else if (computerChoice == "Paper") {
            console.log("It's a tie!");
        }

        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    else if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        else if (computerChoice == "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }

        else {
            console.log("It's a tie!");
        }
    }
}


