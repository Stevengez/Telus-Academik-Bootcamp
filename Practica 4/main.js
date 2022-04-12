// Header
console.log();
console.log("####### ROCK, PAPER, SCISSORS #######");
console.log();

// Definition of options
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function printSelection(selection, player){
    if(selection === ROCK){
        console.log(`${player} chose rock.`);
    }else if (selection === PAPER){
        console.log(`${player} chose paper.`);
    }else{
        console.log(`${player} chose scissors.`);
    }
}

function printWinner(player, cpu){
    if(player === cpu){
        console.log("Draw!");
    }else if(player+cpu === 1){
        player === PAPER ? console.log("You win") : console.log("CPU win");
    }else if(player+cpu === 2){
        player === ROCK ? console.log("You win") : console.log("CPU win");
    }else{
        player === SCISSORS ? console.log("You win") : console.log("CPU win");
    }
}

// Game Selection
let playerSelection = SCISSORS;
let cpuSelection = Math.floor(Math.random()*3);

printSelection(playerSelection, "You");
printSelection(cpuSelection, "CPU");
printWinner(playerSelection, cpuSelection);

console.log();
console.log("############## GAME END #############");










