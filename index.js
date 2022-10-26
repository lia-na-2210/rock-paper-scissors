const playerChoice = prompt('Pick rock, paper or scissors: ')
const computerChoice = getComputerChoice();

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors']

    let computerPick = choices[Math.floor(Math.random()*choices.length)]
    return(computerPick)
     
}


function getPlayerChoice(playerChoice) {
    let playerPick = playerChoice.toLowerCase()
    if (playerPick == 'rock' || playerPick == 'paper' || playerPick == 'scissors'){
        return(playerPick)
    } else {
        return(false)

    }

}

function playRound (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return('It is a tie');
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return('The player won!')
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return('The player won!')
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return('The player won!')
    } else {
        return('The computer won!')
    }
}

console.log(playRound(playerChoice, computerChoice))
console.log(computerChoice)
console.log(playerChoice)
