let input = `459672813`;

let cups = input.split("").map((char) => ({ label: parseInt(char) - 1 }));

for (let i = cups.length; i < 1000000; i++) cups.push({ label: i });
const n = cups.length;

for (let i = 0; i < n; i++) cups[i].next = cups[(i + 1) % n];

let curr = cups[0];
for (let i = 0; i < n; i++) {
  cups[curr.label] = curr;
  curr = curr.next;
}

for (let move = 0; move < 10000000; move++) {
  let pickup = [curr.next, curr.next.next, curr.next.next.next];
  let destLabel = (curr.label - 1 + n) % n;

  while (
    destLabel === pickup[0].label ||
    destLabel === pickup[1].label ||
    destLabel === pickup[2].label
  )
    destLabel = (destLabel - 1 + n) % n;

  let destCup = cups[destLabel];

  [curr.next, destCup.next, pickup[2].next] = [
    pickup[2].next,
    pickup[0],
    destCup.next,
  ];

  curr = curr.next;
}

let output = (cups[0].next.label + 1) * (cups[0].next.next.label + 1);
console.log(output);
