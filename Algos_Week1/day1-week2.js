//The Math Library

var floor = Math.floor(1.8); //Rounds down
var ceiling = Math.ceil(Math.PI); //Rounds up
var random = Math.random(); //0 - 1

console.log(floor);
console.log(ceiling);
conmsole.log(random)

//Dice Roller

function d6() {
    var roll = Math.random();
    // your code here
    roll = roll * 6
    return Math.ceil(roll)
}

var playerRoll = d6();
console.log("The player rolled;" + playerRoll);

    //Consult Oracle

var lifeAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
]

    function oracle(array) {
        //Your code here
        var predictions = Math.floor(Math.random() * array.length)
        return array[predictions]
        
    }
console.log(oracle(lifeAnswers))
