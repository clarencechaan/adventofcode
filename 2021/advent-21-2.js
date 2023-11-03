let input = `Player 1 starting position: 8
Player 2 starting position: 6`;

input = input.split("\n");

let memo = {};

function playGame(
  players = [parseInt(input[0].slice(-1)), parseInt(input[1].slice(-1))],
  scores = [0, 0],
  turn = 0
) {
  let str = [players, scores, turn].join(",");
  if (memo[str]) return memo[str];
  if (scores[0] >= 21) return [1, 0];
  else if (scores[1] >= 21) return [0, 1];

  let result = [0, 0];

  for (let dice1 = 1; dice1 <= 3; dice1++)
    for (let dice2 = 1; dice2 <= 3; dice2++)
      for (let dice3 = 1; dice3 <= 3; dice3++) {
        let steps = dice1 + dice2 + dice3;
        let nextPlayers = [...players];
        let nextScores = [...scores];
        nextPlayers[turn] = ((nextPlayers[turn] - 1 + steps) % 10) + 1;
        nextScores[turn] += nextPlayers[turn];
        let call = playGame(nextPlayers, nextScores, (turn + 1) % 2);
        result[0] += call[0];
        result[1] += call[1];
      }

  memo[str] = result;
  return result;
}

let output = playGame();
output = Math.max(output[0], output[1]);
console.log(output);
