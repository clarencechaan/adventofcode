let input = `by-TW
start-TW
fw-end
QZ-end
JH-by
ka-start
ka-by
end-JH
QZ-cv
vg-TI
by-fw
QZ-by
JH-ka
JH-vg
vg-fw
TW-cv
QZ-vg
ka-TW
ka-QZ
JH-fw
vg-hu
cv-start
by-cv
ka-cv`;

input = input.split("\n").map((str) => str.split("-"));

let start = { name: "start", neighbours: new Set(), small: true };
let end = { name: "end", neighbours: new Set(), small: true };

let caves = { start, end };

for (const [a, b] of input) {
  if (!caves[a])
    caves[a] = { name: a, neighbours: new Set(), small: a.toLowerCase() === a };
  if (!caves[b])
    caves[b] = { name: b, neighbours: new Set(), small: b.toLowerCase() === b };
  caves[a].neighbours.add(b);
  caves[b].neighbours.add(a);
}

let output = 0;

function findPaths(curr = "start", seen = {}, twiceVisited = false) {
  if (curr === "end") {
    output++;
    return;
  }
  for (const next of caves[curr].neighbours) {
    if (
      next === "start" ||
      (caves[next].small &&
        ((twiceVisited && seen[next] >= 1) || seen[next] >= 2))
    )
      continue;
    if (caves[next].small) seen[next] = (seen[next] || 0) + 1;
    findPaths(next, seen, twiceVisited || seen[next] >= 2);
    if (caves[next].small) seen[next]--;
  }
}

findPaths();

console.log(output);
