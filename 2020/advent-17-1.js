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

let sky = [];
for (let i = 0; i < l; i++) {
  sky[i] = [];
  for (let j = 0; j < n; j++) sky[i].push(Array(m).fill("."));
}

for (let i = 0; i < input.length; i++)
  for (let j = 0; j < input.length; j++) sky[6][i + 6][j + 6] = input[i][j];

function getNumActiveNeighbours(x, y, z) {
  let num = 0;
  for (let i = -1; i <= 1; i++)
    for (let j = -1; j <= 1; j++)
      for (let k = -1; k <= 1; k++)
        if (!i && !j && !k) continue;
        else if (sky[z + i]?.[y + j]?.[x + k] === "#") num++;
  return num;
}

function cloneSky(sky) {
  let result = [];
  for (let i = 0; i < sky.length; i++) {
    let mat = [];
    for (let j = 0; j < sky[i].length; j++) mat.push([...sky[i][j]]);
    result.push(mat);
  }
  return result;
}

for (let cycle = 0; cycle < 6; cycle++) {
  let newSky = cloneSky(sky);
  for (let i = 0; i < l; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < m; k++) {
        let numActive = getNumActiveNeighbours(k, j, i);
        if (sky[i][j][k] === "#" && numActive !== 2 && numActive !== 3)
          newSky[i][j][k] = ".";
        else if (sky[i][j][k] === "." && numActive === 3) newSky[i][j][k] = "#";
      }
  sky = newSky;
}

let output = 0;
for (let i = 0; i < l; i++)
  for (let j = 0; j < n; j++)
    for (let k = 0; k < m; k++) if (sky[i][j][k] === "#") output++;
console.log(output);
