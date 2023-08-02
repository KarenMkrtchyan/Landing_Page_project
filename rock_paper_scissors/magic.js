function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
     switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
     }
}

function format(word){
    return word.toLowerCase();
    
}

function playRound(player, computer){
if(computer =="rock"){
    switch (player) {
        case "rock":
            return "Draw!"
        case "paper":
            return "You Win! Paper beats Rock"
        case "scissors":
            return "You Lose! Rock beats Scissors!"
        default:
            return "my bad";
    }
}
else if (computer=="paper"){
    switch (player) {
        case "paper":
            return "Draw!"
        case "scissors":
            return "You Win! Scisors beats Paper"
        case "rock":
            return "You Lose! Paper beats Rock!"
        default:
           return "my bad";
    }
}
else {
    switch (player) {
        case "scissors":
            return "Draw!"
        case "rock":
            return "You Win! Rock beats Scissors"
        case "paper":
            return "You Lose! Scissors beats Paper!"
        default:
            return "my bad";
    }
}
}   

function toEmojie(choice){
    if(choice=='rock'){
        return "✊";
    }
    else if(choice=='scissors'){
        return "✌️";
    }
    else{
        return "✋"
    }
}

    const rock = document.querySelector('#rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const player = document.getElementById('personChoice');
    const computer = document.getElementById('computerChoice');
    const result=document.querySelector('.text-result');
    
   let computerChoice;
    rock.addEventListener('click', function(){
     computerChoice=getComputerChoice();
     result.innerText=(playRound("rock",computerChoice));
     player.innerText='✊';
     computer.innerText=toEmojie(computerChoice);
    });
    scissors.addEventListener('click', function(){
     computerChoice=getComputerChoice()
     result.innerText=(playRound("scissors",computerChoice));
     player.innerText='✌️';
     computer.innerText=toEmojie(computerChoice);
   });
   paper.addEventListener('click', function(){
    computerChoice=getComputerChoice()
    result.innerText=(playRound("paper",computerChoice));
    player.innerText='✋';
    computer.innerText=toEmojie(computerChoice);
});