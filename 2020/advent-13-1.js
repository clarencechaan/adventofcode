let input = `1002394
13,x,x,41,x,x,x,37,x,x,x,x,x,419,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,29,x,421,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17`;

input = input.split("\n");

const minTime = parseInt(input[0]);
let buses = input[1]
  .split(",")
  .filter((str) => parseInt(str))
  .map((str) => parseInt(str));

let busTime = Infinity;
let busNum;
for (const bus of buses) {
  const timestamp = minTime - (minTime % bus) + bus;
  if (timestamp < busTime) {
    busTime = timestamp;
    busNum = bus;
  }
}

let output = (busTime - minTime) * busNum;
console.log(output);
