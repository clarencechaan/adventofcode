let input = `##...#.#
#..##..#
..#.####
.#..#...
########
######.#
.####..#
.###.#..`;

input = input.split("\n").map((str) => str.split(""));

let n = input.length + 13;
let m = input[0].length + 13;
let l = 13;
let o = 13;

let sky = [];
for (let i = 0; i < o; i++) {
  sky[i] = [];
  for (let j = 0; j < l; j++) {
    sky[i][j] = [];
    for (let k = 0; k < n; k++) sky[i][j].push(Array(m).fill("."));
  }
}

for (let i = 0; i < input.length; i++)
  for (let j = 0; j < input[i].length; j++)
    sky[6][6][i + 6][j + 6] = input[i][j];

function getNumActiveNeighbours(x, y, z, w) {
  let num = 0;
  for (let i = -1; i <= 1; i++)
    for (let j = -1; j <= 1; j++)
      for (let k = -1; k <= 1; k++)
        for (let h = -1; h <= 1; h++)
          if (!i && !j && !k && !h) continue;
          else if (sky[w + i]?.[z + j]?.[y + k]?.[x + h] === "#") num++;
  return num;
}

function cloneSky(sky) {
  let result = [];
  for (let i = 0; i < sky.length; i++) {
    result[i] = [];
    for (let j = 0; j < sky[i].length; j++) {
      result[i][j] = [];
      for (let k = 0; k < sky[i][j].length; k++)
        result[i][j].push([...sky[i][j][k]]);
    }
  }
  return result;
}

for (let cycle = 0; cycle < 6; cycle++) {
  let newSky = cloneSky(sky);
  for (let i = 0; i < o; i++)
    for (let j = 0; j < l; j++)
      for (let k = 0; k < n; k++)
        for (let h = 0; h < m; h++) {
          let numActive = getNumActiveNeighbours(h, k, j, i);
          if (sky[i][j][k][h] === "#" && numActive !== 2 && numActive !== 3)
            newSky[i][j][k][h] = ".";
          else if (sky[i][j][k][h] === "." && numActive === 3)
            newSky[i][j][k][h] = "#";
        }
  sky = newSky;
}

let output = 0;
for (let i = 0; i < o; i++)
  for (let j = 0; j < l; j++)
    for (let k = 0; k < n; k++)
      for (let h = 0; h < m; h++) if (sky[i][j][k][h] === "#") output++;

console.log(output);
