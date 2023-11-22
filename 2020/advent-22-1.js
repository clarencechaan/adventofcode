let input = `Player 1:
10
39
16
32
5
46
47
45
48
26
36
27
24
37
49
25
30
13
23
1
9
3
31
14
4

Player 2:
2
15
29
41
11
21
8
44
38
19
12
20
40
17
22
35
34
42
50
6
33
7
18
28
43`;

input = input.split("\n\n");

let player1 = input[0]
  .split("\n")
  .slice(1)
  .map((char) => parseInt(char));
let player2 = input[1]
  .split("\n")
  .slice(1)
  .map((char) => parseInt(char));

const n = player1.length + player2.length;

function playGame() {
  if (!player1.length || !player2.length) return;

  let card1 = player1[0];
  let card2 = player2[0];

  player1 = player1.slice(1);
  player2 = player2.slice(1);

  if (card1 > card2) player1.push(card1, card2);
  else player2.push(card2, card1);

  playGame();
}

playGame();

let output = 0;
if (player1.length)
  for (let i = 0; i < n; i++) output += player1[n - 1 - i] * (i + 1);
else for (let i = 0; i < n; i++) output += player2[n - 1 - i] * (i + 1);

console.log(output);
