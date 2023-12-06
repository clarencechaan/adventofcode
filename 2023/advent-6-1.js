let input = `Time:        44     80     65     72
Distance:   208   1581   1050   1102`;

input = input.split("\n");

let times = input[0]
  .slice(5)
  .split(" ")
  .filter((char) => char)
  .map((str) => parseInt(str));

let records = input[1]
  .slice(9)
  .split(" ")
  .filter((char) => char)
  .map((str) => parseInt(str));

function getDistance(raceIdx, chargeTime) {
  const time = times[raceIdx];
  return (time - chargeTime) * chargeTime;
}

let output = 1;

for (let raceIdx = 0; raceIdx < times.length; raceIdx++) {
  let ways = 0;
  for (let chargeTime = 0; chargeTime <= times[raceIdx]; chargeTime++)
    if (getDistance(raceIdx, chargeTime) > records[raceIdx]) ways++;
  output *= ways;
}

console.log(output);
