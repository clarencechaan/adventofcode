let input = `2 77706 5847 9258441 0 741 883933 12`;
input = input.split(" ").map((str) => +str);

function blink(stones) {
  const afterBlink = {};
  for (const str in stones) {
    const stone = +str;
    const count = stones[str];
    if (stone === 0) {
      afterBlink[1] = (afterBlink[1] || 0) + count;
    } else if (str.length % 2 === 0) {
      const leftHalf = +str.slice(0, str.length / 2);
      const rightHalf = +str.slice(str.length / 2);
      afterBlink[leftHalf] = (afterBlink[leftHalf] || 0) + count;
      afterBlink[rightHalf] = (afterBlink[rightHalf] || 0) + count;
    } else {
      afterBlink[stone * 2024] = (afterBlink[stone * 2024] || 0) + count;
    }
  }
  return afterBlink;
}

let stones = {};
for (const stone of input) stones[stone] = (stones[stone] || 0) + 1;

for (let i = 0; i < 75; i++) stones = blink(stones);

let result = 0;
for (const str in stones) result += stones[str];
console.log(result);
