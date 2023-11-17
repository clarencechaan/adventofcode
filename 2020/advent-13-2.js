let input = `1002394
13,x,x,41,x,x,x,37,x,x,x,x,x,419,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,29,x,421,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17`;

input = input.split("\n")[1];

let buses = input
  .split(",")
  .map((str, idx) => (parseInt(str) ? [parseInt(str), idx] : null))
  .filter((bus) => bus);

let timestamp = 0;
let toAdd = buses[0][0];

for (let i = 1; i < buses.length; i++) {
  const [bus, offset] = buses[i];
  let t = timestamp;
  let valid = [];
  while (valid.length < 2) {
    if ((t + offset) % bus === 0) valid.push(t);
    t += toAdd;
  }

  timestamp = valid[0];
  toAdd = valid[1] - valid[0];
}

console.log(timestamp);
