let input = `Time:        44     80     65     72
Distance:   208   1581   1050   1102`;

input = input.split("\n");

let time = parseInt(input[0].slice(5).replaceAll(" ", ""));

let record = parseInt(input[1].slice(9).replaceAll(" ", ""));

function getDistance(chargeTime) {
  return (time - chargeTime) * chargeTime;
}

let output = 0;

for (let chargeTime = 0; chargeTime <= time; chargeTime++)
  if (getDistance(chargeTime) > record) output++;

console.log(output);
