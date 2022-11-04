const choices = ['rock', 'paper', 'scissors']

function game(){
    playRound()
}

function playRound () {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(playerChoice)
    console.log(computerChoice)
    const winner = checkWinner(playerChoice, computerChoice);
    console.log(winner)
    
}

function checkWinner(player, compu) {
    if (player == compu) {
        return('It is a tie');
    } else if (player == 'paper' && compu == 'rock') {
        return('The player won!')
    } else if (player == 'scissors' && compu == 'paper') {
        return('The player won!')
    } else if (player == 'rock' && compu == 'scissors') {
        return('The player won!')
    } else {
        return('The computer won!')
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
