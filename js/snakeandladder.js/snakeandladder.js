
class snakeAndladder {
    constructor(position, dice, diceNumber) {
            this.position = position;
            this.dice = dice;

    }
}
var play = new snakeAndladder(0, 0, 0); //create a object//
console.log("Welcome in snake and ladder probolem");
console.log(play);
function start() {

    while (play.position < 49) {
            play.dice = Math.floor(Math.random() * 6 + 1);
            console.log(play.dice);
            switch (play.dice) {
                    case 0:
                            console.log("player stay at zero position");
                    case 1:
                            play.position = play.position + play.dice;
                            console.log("player move to 1st position=" + play.position);
                            break;
                    case 2:
                            play.position = play.position + play.dice;
                            console.log("player move to 2nd position=" + play.position);
                            break;
                    case 3:
                            play.position = play.position + play.dice;
                            console.log("player move to 3rd position and got ladder=" + play.position);
                            break;
                    case 4:
                            play.position = play.position + play.dice;
                            console.log("Player move to 4th position=" + play.position);
                            break;
                    case 5:
                            play.position = play.position - play.dice;
                            console.log("snake attack down the position=" + play.position);
                            break;
                    case 6:
                            play.position = play.position - play.dice;
                            console.log("ladder move one cell to another cell=" + play.position);

                    default:
                            console.log("Player not play the game");
            }

    }

    function dice(ladder) {
            console.log("Ladder value=" + ladder);
    }
    Start(dice)
    console.log("Winning position=" + play.position);
}