let playerScore = 0;
let computerScore = 0;
const playerChoice = document.querySelectorAll(".rockButton");
const firstCardChoice = document.querySelector("#first");
const secondCardChoice = document.querySelector("#second");
const resultContainer = document.querySelector(".resContainer");

function disableButtons(){
    playerChoice.forEach(elem => {
        elem.disabled = true;
    } )
}
function getComputerChoice(){
    let choiceNumber =  Math.floor(Math.random() * (4 - 1) + 1);
    let choice = "";
    switch(choiceNumber){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
        default:
            break;
    }
    return choice;
}

function restart(){
    const restartButton = document.createElement('button');
    restartButton.classList.add('restartButton');
    restartButton.innerText = "Restart the game";
    resultContainer.appendChild(restartButton);
    restartButton.addEventListener("click", function(){
        window.location.reload()
    });
}

function round(computerSelection, playerSelection){
    if(document.querySelector(".result")){
        const oldRes = document.querySelector(".result");
        oldRes.remove();
    }
    if(document.querySelectorAll(".score")){
        const oldScore = document.querySelectorAll(".score");
        oldScore.forEach(score => {
            score.remove();
        })
    }
    const result = document.createElement('div');
    const scorePlayer = document.createElement('div');
    scorePlayer.classList.add('score');
    const scoreComputer = document.createElement('div');
    scoreComputer.classList.add('score');
    result.classList.add('result')
    if(computerSelection == "rock" && playerSelection == "paper"){
        result.innerText = "You won! Paper beats rock!";
        playerScore++;
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        result.innerText = "You lose! Rock beats scissors" ;
        computerScore++;
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        result.innerText = "You lose! Paper beats rock" ;
        computerScore++;
    }
    else if(computerSelection == "paper" && playerSelection == "scissors"){
        result.innerText = "You won! Scissors beats paper";
        playerScore++;
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        result.innerText = "You lose! Scissors beats paper";
        computerScore++;
    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        result.innerText = "You won! Rock beats scissors" ;
        playerScore++;
    }
    else{
        result.innerText = "DRAW!!!";
    }
    scorePlayer.innerText = playerScore;
    scoreComputer.innerText = computerScore;
    firstCardChoice.appendChild(scorePlayer);
    secondCardChoice.appendChild(scoreComputer);
    resultContainer.appendChild(result);
    if(playerScore==5){
        result.innerText = "You won the game!!!";
        disableButtons();
        restart();
    }
    else if(computerScore==5){
        result.innerText = "You lose the game!!!";
        disableButtons();
        restart();
    }
    
    // firstCardChoice.parentNode.insertBefore(result, firstCardChoice.nextSibling);

    

}

playerChoice.forEach(button => {
    button.addEventListener("click", function() {
        round(getComputerChoice(), button.value )
    })
})

// function game(){
//     const rockButton = document.querySelector('.rockButton');
//     const paperButton = document.querySelector('.paperButton');
//     const scissorsButton = document.querySelector('.scissorsButton');
//     const playerChoice = document.querySelectorAll("rockButton");
   
// }

//  game();