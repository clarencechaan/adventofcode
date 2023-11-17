let input = `11,0,1,10,5,19`;

input = input.split(",").map((str) => parseInt(str));

let turn = {};
for (let i = 0; i < input.length; i++) turn[input[i]] = i;

let prev = input[input.length - 1];
for (let i = input.length; i < 30000000; i++) {
  if (i % 300000 === 0) console.log(i / 300000, "%");
  let next;
  if (turn[prev] === undefined) next = 0;
  else next = i - turn[prev] - 1;
  turn[prev] = i - 1;
  prev = next;
}

console.log(prev);
// 9136
