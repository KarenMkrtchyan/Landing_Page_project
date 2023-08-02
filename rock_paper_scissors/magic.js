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

function getInput(callback){
    let result =''
    const rock = document.querySelector('#rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    
    rock.addEventListener('click', function(){
         console.log(rock.id)
        result = rock.id;
    });
    scissors.addEventListener('click', function(){
        console.log(scissors.id)
       result = scissors.id;
   });
   paper.addEventListener('click', function(){
    console.log(paper.id)
   result = paper.id;
});
    if(result){
        return result;
    }
    else{
        getInput()
    }
     
}

function game(){
//    let player= format(prompt("Pick your poision"));
//    console.log(player);
    let player=getInput();
    console.log(player);
    if(player == "rock"||player == "paper"||player == "scissors"){
        let result = playRound(player, getComputerChoice());
        return result;      
    }
}




game();

