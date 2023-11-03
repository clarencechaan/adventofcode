let input = `Player 1 starting position: 8
Player 2 starting position: 6`;

input = input.split("\n");

let player1 = parseInt(input[0].slice(-1));
let player2 = parseInt(input[1].slice(-1));

function Dice() {
  let nextRoll = 1;
  this.numOfRolls = 0;

  function roll() {
    this.numOfRolls++;
    let result = nextRoll;
    nextRoll = (nextRoll % 100) + 1;
    return result;
  }

  this.roll = roll;
}

let dice = new Dice();

let score1 = 0;
let score2 = 0;

function playGame() {
  player1 = ((player1 - 1 + dice.roll() + dice.roll() + dice.roll()) % 10) + 1;
  score1 += player1;
  if (score1 >= 1000) {
    let output = score2 * dice.numOfRolls;
    console.log(output);
    return;
  }

  player2 = ((player2 - 1 + dice.roll() + dice.roll() + dice.roll()) % 10) + 1;
  score2 += player2;
  if (score2 >= 1000) {
    let output = score1 * dice.numOfRolls;
    console.log(output);
    return;
  }

  playGame();
}

playGame();
