const choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.getElementsByClassName('btn-pick');
const plyChoice = document.getElementById('ply-choice');
const comChoice = document.getElementById('com-choice');
const playBtn = document.getElementById('btn-play');
const playerPoints = document.getElementById('player-score');
const compuPoints = document.getElementById('computer-score');

let playerScore = 0;
let compuScore = 0;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playerChoice);
}

function playerChoice(obj) {
    let playerPick = obj.target.innerText;
    //console.log(playerPick)
    plyChoice.innerText = playerPick;
}


function game(winner){
    let winnerText = document.getElementById('winner');

    if (playerScore == 5) {
        winnerText.innerText = `The player has won ${playerScore} and the computer ${compuScore}. Well played!`
        playerScore = 0;
        compuScore = 0;
        playerPoints.innerText = '';
        compuPoints.innerText = '';
    } else if (compuScore == 5) {
        winnerText.innerText = `The player has won ${playerScore} and the computer ${compuScore}. Try again!`
        playerScore = 0;
        compuScore = 0;
        playerPoints.innerText = '';
        compuPoints.innerText = '';
    } else {
        if (winner == 'player') {
            playerScore += 1;
            playerPoints.innerText = (`Your score is: ${playerScore}`);
            winnerText.innerText = 'The player won!';
        } else if (winner == 'compu') {
            compuScore += 1;
            compuPoints.innerText = (`The computer is: ${compuScore}`);
            winnerText.innerText = 'The computer won!';
        } else {
            winnerText.innerText = "It's a tie!";
        }
    }
    
}

function playRound (player) {
    let computerPick = getComputerChoice();
    let playerPick = plyChoice.innerText;
    comChoice.innerText = computerPick;

    const winner = checkWinner(playerPick, computerPick);
    console.log(winner);
    game(winner);
    
}

function checkWinner(p, c) {
    console.log(p);
    console.log(c);
    if (p == c) {
        return('tie');
    } else if (p == 'Paper' && c == 'Rock') {
        return('player')
    } else if (p == 'Scissors' && c == 'Paper') {
        return('player')
    } else if (p == 'Rock' && c == 'Scissors') {
        return('player')
    } else {
        return('compu')
    }
}

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)];
    
}

playBtn.addEventListener('click', function () {
    playRound();
});