function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
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

function setUpGame() {
    const body = document.querySelector("body");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    button1.textContent = "Rock";
    button2.textContent = "Paper";
    button3.textContent = "Scissors";
    button1.addEventListener("click", () => {
        playRound("Rock", getComputerChoice());
    });
    button2.addEventListener("click", () => {
        playRound("Paper", getComputerChoice());
    });
    button3.addEventListener("click", () => {
        playRound("Scissors", getComputerChoice());
    });
    body.appendChild(button1);
    body.appendChild(button2);
    body.appendChild(button3);
}

function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5)
        return;

    if (rounds != 0) {
        const resetDivs = document.querySelectorAll("div");
        resetDivs.forEach((div) => {
            div.remove();
        })


        const resetHeaders = document.querySelectorAll("h3");
        resetHeaders.forEach((header) => {
            header.remove();
        })
    }

    const body = document.querySelector("body");
    const humanDiv = document.createElement("div");
    humanDiv.textContent = "Your Choice: " + humanChoice;
    const computerDiv = document.createElement("div");
    computerDiv.textContent = "Computer Choice: " + computerChoice;
    const announcer = document.createElement("div");

    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            announcer.textContent = "It's a tie!"
            console.log("It's a tie!");
        }

        else if (computerChoice == "Paper") {
            announcer.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        else {
            announcer.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }

    else if (humanChoice == "Paper") {
        if (computerChoice == "Rock") {
            announcer.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }

        else if (computerChoice == "Paper") {
            announcer.textContent = "It's a tie!"
            console.log("It's a tie!");
        }

        else {
            announcer.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    else if (humanChoice == "Scissors") {
        if (computerChoice == "Rock") {
            announcer.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        else if (computerChoice == "Paper") {
            announcer.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }

        else {
            announcer.textContent = "It's a tie!";
            console.log("It's a tie!");
        }
    }

    rounds++;
    const roundDiv = document.createElement("h3");
    roundDiv.textContent = "Round: " + rounds;
    const scoreDiv = document.createElement("h3");
    scoreDiv.textContent = `Your score: ${humanScore}\nComputer Score: ${computerScore}`;

    body.appendChild(roundDiv);
    body.appendChild(humanDiv);
    body.appendChild(computerDiv);
    body.appendChild(announcer);
    body.appendChild(scoreDiv);

    if (humanScore == 5 || computerScore == 5) {
        const winnerAnnouncer = document.createElement("h1");
        if (humanScore > computerScore) {
            winnerAnnouncer.textContent = `You've won with a score of ${humanScore} to ${computerScore}.`;
            console.log(`You've won with a score of ${humanScore} to ${computerScore}.`);
        }
        else if (humanScore == computerScore) {
            winnerAnnouncer.textContent = `You've tied with a score of ${humanScore}.`;
            console.log(`You've tied with a score of ${humanScore}`);
        }
        else {
            winnerAnnouncer.textContent = `You've lost with a score of ${computerScore} to ${humanScore}`;
            console.log(`You've lost with a score of ${computerScore} to ${humanScore}.`);
        }
        const reload = document.createElement("h1");
        reload.textContent = "Reload to play again!";
        body.appendChild(winnerAnnouncer);
        body.appendChild(reload);
    }
        
        
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
setUpGame();