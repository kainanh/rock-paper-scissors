const options = ['Rock', 'Paper', 'Scissors']
const playerImages = ['./rock.png', './paper.png', './scissors.png']
const computerImages = ['./rock2.png', './paper2.png', './scissors2.png']

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    return options[choice]
}

let playerScore = 0
let computerScore = 0

function gameRound(event){
    let playerSelection = event.target.value
    let computerSelection = getComputerChoice()
    
    document.getElementById("playerWeapon").textContent = playerSelection.toUpperCase()
    document.getElementById("computerWeapon").textContent = computerSelection.toUpperCase()

    //This updates the players image selection when each round starts
    if(playerSelection == 'Rock'){
        document.getElementById("player-weapon-img").src = playerImages[0]
    } else if(playerSelection == 'Paper'){
        document.getElementById("player-weapon-img").src = playerImages[1]
    } else if(playerSelection == 'Scissors'){
        document.getElementById("player-weapon-img").src = playerImages[2]
    }

    //This updates the computers image selection when each round starts
    if(computerSelection == 'Rock'){
        document.getElementById("computer-weapon-img").src = computerImages[0]
    } else if(computerSelection == 'Paper'){
        document.getElementById("computer-weapon-img").src = computerImages[1]
    } else if(computerSelection == 'Scissors'){
        document.getElementById("computer-weapon-img").src = computerImages[2]
    }


    //This updates the results and includes he game logic
    if(playerScore < 5 && computerScore < 5){
        if(playerSelection == computerSelection){
        document.getElementById("result").textContent = "Great minds think alike. This round ends in a draw"
    } else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        playerScore += 1
        document.getElementById("player-score").textContent = playerScore
        document.getElementById("result").textContent = "Congrats player!, You won this round"
    } else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        playerScore += 1
        document.getElementById("player-score").textContent = playerScore
        document.getElementById("result").textContent = "Congrats player!, You won this round"
    } else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        playerScore += 1
        document.getElementById("player-score").textContent = playerScore
        document.getElementById("result").textContent = "Congrats player!, You won this round"
    } else {
        computerScore += 1
        document.getElementById("computer-score").textContent = computerScore
        document.getElementById("result").textContent = "Wow the computer is living in your head rent free buddy. You lost this round"
    }
    }
    
    
    
    //Create button to be able to restart the game once it ends by reloading the page.
    const resetButton = document.createElement("button")
    resetButton.innerHTML = "RESTART"
    resetButton.onclick = function refreshPage() {
        window.location.reload()
    }

    //Adding the button to the page only once either the player or computer wins.
    if(document.getElementsByClassName("restart-button").length == 0){
        if(playerScore == 5){
        document.getElementById("result").textContent = "YOU WIN!"
        resetButton.classList.add("restart-button")
        document.getElementById("result").appendChild(resetButton) 
    }else if (computerScore == 5){
        document.getElementById("result").textContent = "YOU LOSE!"
        resetButton.classList.add("restart-button")
        document.getElementById("result").appendChild(resetButton)
    }
    }
    
}

