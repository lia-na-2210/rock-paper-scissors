const choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.getElementsByClassName('btn-pick');
const plyChoice = document.getElementById('ply-choice');
const comChoice = document.getElementById('com-choice');
const playBtn = document.getElementById('btn-play');
const playerPoints = document.getElementById('player-score');
const compuPoints = document.getElementById('computer-score');
const winnerText = document.getElementById('winner');

let playerScore = 0;
let compuScore = 0;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playerChoice);
}

function playerChoice(obj) {
    let playerPick = obj.target.innerText;
    //console.log(playerPick)
    plyChoice.innerText = playerPick;
    comChoice.innerText = '';
    return true;
}


function game(winner){

    if (winner == 'player') {
        playerScore += 1;
        playerPoints.innerText = (`Your score is: ${playerScore}`);
        winnerText.innerText = 'The player won!';
    } else if (winner == 'compu') {
        compuScore += 1;
        compuPoints.innerText = (`The computer score is: ${compuScore}`);
        winnerText.innerText = 'The computer won!';
    } else {
        winnerText.innerText = "It's a tie!";
    }

    checkScore(playerScore,compuScore);
}

function playRound (player) {
    let computerPick = getComputerChoice();
    let playerPick = plyChoice.innerText;
    comChoice.innerText = computerPick;

    const winner = checkWinner(playerPick, computerPick);
    //console.log(winner);
    game(winner);
    
}

function checkWinner(p, c) {
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

function checkScore(playerScore,compuScore){

    if (playerScore == 5) {
        winnerText.innerText = `You won ${playerScore} times and the computer ${compuScore} times. Well played!`
        playerScore = 0;
        compuScore = 0;
        playerPoints.innerText = '';
        compuPoints.innerText = '';
    } else if (compuScore == 5) {
        winnerText.innerText = `The computer won ${compuScore}, you only won ${playerScore}, you lost.`
        playerScore = 0;
        compuScore = 0;
        playerPoints.innerText = '';
        compuPoints.innerText = '';
    } else {
        return
    }
}

playBtn.addEventListener('click', function () {
    if (plyChoice.innerText.length === 0) {
        return;
    } else {
        playRound();
    }

});