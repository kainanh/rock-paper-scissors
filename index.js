const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    return options[choice]
}


function gameRound(event){
    let playerSelection = event.target.value
    let computerSelection = getComputerChoice()
    
    document.getElementById("playerWeapon").textContent = playerSelection.toUpperCase()
    
    document.getElementById("computerWeapon").textContent = computerSelection.toUpperCase()

    if(playerSelection == computerSelection){
        console.log("Great minds think alike. This round ends in a draw")
    } else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        console.log(playerSelection, computerSelection)
        console.log("Congrats player!, You won this round")
    } else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        console.log(playerSelection, computerSelection)
        console.log("Congrats player!, You won this round")
    } else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        console.log(playerSelection, computerSelection)
        console.log("Congrats player!, You won this round")
    } else {
        console.log(playerSelection, computerSelection)
        console.log("Wow the computer is living in your head rent free buddy. You lost this round")
    }
}

