let input = `459672813`;

let cups = input.split("").map((char) => ({ label: parseInt(char) - 1 }));
const n = cups.length;

for (let i = 0; i < n; i++) cups[i].next = cups[(i + 1) % n];

let curr = cups[0];
for (let move = 0; move < 100; move++) {
  let pickup = [curr.next, curr.next.next, curr.next.next.next];
  let destLabel = (curr.label - 1 + n) % n;

  while (
    destLabel === pickup[0].label ||
    destLabel === pickup[1].label ||
    destLabel === pickup[2].label
  )
    destLabel = (destLabel - 1 + n) % n;
  let destCup = pickup[2].next;

  while (destCup.label !== destLabel) destCup = destCup.next;

  [curr.next, destCup.next, pickup[2].next] = [
    pickup[2].next,
    pickup[0],
    destCup.next,
  ];

  curr = curr.next;
}

while (curr.label !== 0) curr = curr.next;
let output = "";
for (let i = 0; i < n - 1; i++) {
  curr = curr.next;
  output += curr.label + 1;
}
console.log(output);
