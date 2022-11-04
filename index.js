const choices = ['rock', 'paper', 'scissors']

function game(){
    let playerScore = 0
    let compuScore = 0

    for (let i = 0; i < 5; i++ ) {
        let winner = playRound()
        if (winner == 'player') {
            playerScore += 1
            console.log('The player won!')
        } else if (winner == 'compu') {
            compuScore += 1
            console.log('The computer won!')
        } else {
            console.log("It's a tie!")
        }
    }
    console.log(`The player won ${playerScore} times and the computer ${compuScore}`)
}

function playRound () {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(playerChoice)
    console.log(computerChoice)
    const winner = checkWinner(playerChoice, computerChoice);
    return winner
    
}

function checkWinner(player, compu) {
    if (player == compu) {
        return('tie');
    } else if (player == 'paper' && compu == 'rock') {
        return('player')
    } else if (player == 'scissors' && compu == 'paper') {
        return('player')
    } else if (player == 'rock' && compu == 'scissors') {
        return('player')
    } else {
        return('compu')
    }
}

function getComputerChoice () {
    return choices[Math.floor(Math.random()*choices.length)]
    
}


function getPlayerChoice() {
    let input = prompt('Pick rock, paper or scissors: ')
    while (input == null) {
        input = prompt('Pick rock, paper or scissors: ')
    }
    input = input.toLowerCase()
    let check = validateChoice(input)
    /*console.log(check)*/
    while (check == false) {
        input = prompt('You can only type rock, paper or scissors, so pick: ')
        while (input == null) {
            input = prompt('Pick rock, paper or scissors: ')
        }
        input = input.toLowerCase()
        check = validateChoice(input)
    }
    return input
}

function validateChoice(choice) {
    return choices.includes(choice)
}

game()
