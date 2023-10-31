let input = `6111821767
1763611615
3512683131
8582771473
8214813874
2325823217
2222482823
5471356782
3738671287
8675226574`;

input = input
  .split("\n")
  .map((str) => str.split("").map((char) => parseInt(char)));

const n = input.length;
const m = input[0].length;

let output = 0;

for (let step = 0; step < 100; step++) {
  let flashGrid = [];
  for (let i = 0; i < n; i++) flashGrid.push([]);

  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) input[i][j]++;

  for (let done; !done; ) {
    done = true;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) {
        if (input[i][j] > 9 && !flashGrid[i][j]) {
          done = false;
          output++;
          flashGrid[i][j] = true;
          if (input[i - 1]?.[j] !== undefined) input[i - 1][j]++;
          if (input[i + 1]?.[j] !== undefined) input[i + 1][j]++;
          if (input[i][j - 1] !== undefined) input[i][j - 1]++;
          if (input[i][j + 1] !== undefined) input[i][j + 1]++;
          if (input[i - 1]?.[j - 1] !== undefined) input[i - 1][j - 1]++;
          if (input[i - 1]?.[j + 1] !== undefined) input[i - 1][j + 1]++;
          if (input[i + 1]?.[j - 1] !== undefined) input[i + 1][j - 1]++;
          if (input[i + 1]?.[j + 1] !== undefined) input[i + 1][j + 1]++;
        }
      }
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (input[i][j] > 9) input[i][j] = 0;
}

console.log(output);
