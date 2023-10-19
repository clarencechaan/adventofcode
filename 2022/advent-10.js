let input = `noop
noop
noop
addx 4
addx 1
addx 5
addx 1
addx 5
noop
addx -1
addx -6
addx 11
noop
noop
noop
noop
addx 6
addx 5
noop
noop
noop
addx -30
addx 34
addx 2
addx -39
noop
addx 5
addx 2
addx 19
addx -18
addx 2
addx 5
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx -15
addx -22
noop
noop
addx 5
addx 2
noop
noop
addx 14
addx -11
addx 5
addx 2
addx 3
noop
addx 2
addx -16
addx 17
addx 2
addx 5
addx 2
addx -6
addx -25
addx 35
addx 1
addx -36
addx 1
addx 22
addx -19
addx 5
addx 2
noop
noop
addx 5
noop
noop
noop
addx 1
addx 4
noop
noop
noop
addx 5
noop
addx 1
addx 2
addx 3
addx 4
addx -34
addx 21
addx -24
addx 2
addx 5
addx 7
addx -6
addx 2
addx 30
addx -23
addx 10
addx -9
addx 2
addx 2
addx 5
addx -12
addx 13
addx 2
addx 5
addx 2
addx -12
addx -24
addx -1
noop
addx 3
addx 3
addx 1
addx 5
addx 21
addx -16
noop
addx 19
addx -18
addx 2
addx 5
addx 2
addx 3
noop
addx 3
addx -1
addx 1
addx 2
addx -18
addx 1
noop`;

input = input.split("\n");

let x = [[1, 1]];

for (const line of input) {
  x.push([x[x.length - 1][1], x[x.length - 1][1]]);
  if (line.slice(0, 4) === "addx") {
    let add = parseInt(line.slice(5));
    x.push([x[x.length - 1][1], x[x.length - 1][1] + add]);
  }
}

// part 1
// let output =
//   20 * x[20][0] +
//   60 * x[60][0] +
//   100 * x[100][0] +
//   140 * x[140][0] +
//   180 * x[180][0] +
//   220 * x[220][0];

// part 2
let output = "";
for (let i = 1; i < x.length; i++) {
  if ((i - 1) % 40 === 0) output += "\n";
  if (Math.abs(x[i][0] - ((i - 1) % 40)) <= 1) output += "#";
  else output += ".";
}

console.log(output);
