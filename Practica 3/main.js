console.log();
console.log("##### MAGIC BALL ######");
console.log();

let playerName = "Steven";
let playerQuestion = "Is this program well done?"; // The question the magicball will answer
let magicBallAnswer = "";

if(playerName !== ""){
    console.log(`Hello ${playerName}, let's guess your fortune`);
}else{
    console.log(`Hello, let's guess your fortune`);
}

// Print the question
console.log("Q: ",playerQuestion);

let randomValue = Math.floor(Math.random()*20);

if(randomValue === 0){
    console.log("Try Again");
}else if(randomValue < 11){
    
    // Set the answer of the ball based on random number
    // These ones are considered "positive" answers
    if(randomValue === 1){
        magicBallAnswer = "It is certain.";
    }else if(randomValue === 2){
        magicBallAnswer = "It is decidedly so.";
    }else if(randomValue === 3){
        magicBallAnswer = "Without a doubt.";
    }else if(randomValue === 4){
        magicBallAnswer = "Yes definitely.";
    }else if(randomValue === 5){
        magicBallAnswer = "You may rely on it.";
    }else if(randomValue === 6){
        magicBallAnswer = "As I see it, yes.";
    }else if(randomValue === 7){
        magicBallAnswer = "Most likely.";
    }else if(randomValue === 8){
        magicBallAnswer = "Outlook good.";
    }else if(randomValue === 9){
        magicBallAnswer = "Yes.";
    }else{
        magicBallAnswer = "Signs point to yes.";
    }
    
    // Print the ball answer
    console.log(`Lucky you, ${magicBallAnswer}`);
}else if(randomValue < 16){

    // Set the answer of the ball based on random number
    // This ones are considered "neutral" answers
    if(randomValue === 11){
        magicBallAnswer = "Reply hazy, try again.";
    }else if(randomValue === 12){
        magicBallAnswer = "Ask again later.";
    }else if(randomValue === 13){
        magicBallAnswer = "Better not tell you now.";
    }else if(randomValue === 14){
        magicBallAnswer = "Cannot predict now.";
    }else{
        magicBallAnswer = "Concentrate and ask again.";
    }
    
    console.log(magicBallAnswer);
}else{

    // Set the answer of the ball based on random number
    // These ones are considered "negative" answers
    if(randomValue === 16){
        magicBallAnswer = "Don't count on it.";
    }else if(randomValue === 17){
        magicBallAnswer = "My reply is no.";
    }else if(randomValue === 18){
        magicBallAnswer = "My sources say no.";
    }else if(randomValue === 19){
        magicBallAnswer = "Outlook not so good.";
    }else{
        magicBallAnswer = "Very doubtful.";
    }

    console.log(`Sorry, ${magicBallAnswer}`);
}

console.log();
console.log("##### GAME END ######");
