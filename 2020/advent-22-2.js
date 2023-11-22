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

function playGame(
  rounds1 = new Set(),
  rounds2 = new Set(),
  p1 = player1,
  p2 = player2,
  depth = 0
) {
  while (p1.length && p2.length) {
    let str1 = p1.join(",");
    let str2 = p2.join(",");
    if (depth && (rounds1.has(str1) || rounds2.has(str2))) return "player1";
    rounds1.add(str1);
    rounds2.add(str2);

    let card1 = p1[0];
    let card2 = p2[0];

    p1 = p1.slice(1);
    p2 = p2.slice(1);

    let roundWinner = "";
    if (p1.length >= card1 && p2.length >= card2) {
      let nextP1 = p1.slice(0, card1);
      let nextP2 = p2.slice(0, card2);
      let nextRounds1 = new Set(rounds1);
      let nextRounds2 = new Set(rounds2);
      roundWinner = playGame(
        nextRounds1,
        nextRounds2,
        nextP1,
        nextP2,
        depth + 1
      );
    } else if (card1 > card2) roundWinner = "player1";
    else roundWinner = "player2";

    if (roundWinner === "player1") p1.push(card1, card2);
    else if (roundWinner === "player2") p2.push(card2, card1);
  }

  if (!depth) {
    console.log(p1, p2);
    if (p1.length) return p1;
    else return p2;
  }

  if (p1.length) return "player1";
  else return "player2";
}

let winner = playGame();

let output = 0;
for (let i = 0; i < n; i++) output += winner[n - 1 - i] * (i + 1);

console.log(output);
// 32528
