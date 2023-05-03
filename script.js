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

function round(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "Paper"){
        return "You won! Paper beats rock!";
    }
    else if(computerSelection == "rock" && playerSelection == "scissors"){
        return "You lose! Rock beats scissors";
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        return "You lose! Paper beats rock";
    }
    else if(computerSelection == "paper" && playerSelection == "scissors"){
        return "You won! Scissors beats paper";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        return "You lose! Scissors beats paper";
    }
    else if(computerSelection == "scissors" && playerSelection == "rock"){
        return "You won! Rock beats scissors";
    }
    else{
        return "DRAW!!!";
    }
}

function game(){
    let scoreComputer = 0;
    let playerScore = 0;
    let playerChoice = "";
    for(let i = 0; i<5;i++){
        playerChoice = prompt("What is your choice?(Rock, paper or scissors)");
        playerChoice = playerChoice.toLowerCase();
        if(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            alert("YOU PICKED WRONG! ERROR");
            return;
        }
        let roundMessage = round(getComputerChoice(), playerChoice);
        if(roundMessage[4] == 'w'){
            playerScore++;
        }
        else if(roundMessage[4] == 'l'){
            scoreComputer++;
        }
        console.log(roundMessage);
        console.log("Your score: " + playerScore + " Computers score: " + scoreComputer);
    }
    console.log("HERE COMES THE RESULTS!")
    if(playerScore>scoreComputer){
        console.log("YOU ARE CHAMPION!");
    }
    else if(playerScore<scoreComputer){
        console.log("YOU ARE LOSEER!");
    }
    else{
        console.log("DRAW!!!");
    }
}

game();