let input = `2 77706 5847 9258441 0 741 883933 12`;
input = input.split(" ").map((str) => +str);

function blink(stones) {
  const afterBlink = [];
  for (const stone of stones) {
    const str = stone.toString();
    if (stone === 0) afterBlink.push(1);
    else if (str.length % 2 === 0) {
      afterBlink.push(+str.slice(0, str.length / 2));
      afterBlink.push(+str.slice(str.length / 2));
    } else {
      afterBlink.push(stone * 2024);
    }
  }
  return afterBlink;
}

let stones = [...input];
for (let i = 0; i < 25; i++) stones = blink(stones);

const result = stones.length;
console.log(result);
