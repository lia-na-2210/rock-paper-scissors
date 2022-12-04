const choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.getElementsByClassName('btn-pick');
const plyChoice = document.getElementById('ply-choice');
const comChoice = document.getElementById('com-choice');
const playBtn = document.getElementById('btn-play');



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

    let playerScore = 0;
    let compuScore = 0;
    

    if (winner == 'player') {
        playerScore += 1;
        winnerText.innerText = 'The player won!';
    } else if (winner == 'compu') {
        compuScore += 1;
        winnerText.innerText = 'The computer won!';
    } else {
        winnerText.innerText = "It's a tie!";
    }
    
    console.log(playerScore, compuScore);

    /*let playerPoints = document.getElementById('player-score');
    playerPoints.innerText += playerScore;
    let compuPoints = document.getElementById('computer-score');
    compuPoints.innerText += compuScore;*/
    
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