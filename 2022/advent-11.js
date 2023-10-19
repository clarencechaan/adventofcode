class Monkey {
  constructor(items, operation, test) {
    this.items = items;
    this.operation = operation;
    this.test = test;
    this.count = 0;
  }

  throwItems() {
    this.count += this.items.length;
    for (let item of this.items) {
      item = this.operation(item);
      monkeys[this.test(item)].catchItem(item);
    }
    this.items = [];
  }

  catchItem(item) {
    this.items.push(item);
  }
}

let monkeys = [
  new Monkey(
    [77, 69, 76, 77, 50, 58],
    (item) => (item * 11) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 5 === 0 ? 1 : 5)
  ),
  new Monkey(
    [75, 70, 82, 83, 96, 64, 62],
    (item) => (item + 8) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 17 === 0 ? 5 : 6)
  ),
  new Monkey(
    [53],
    (item) => (item * 3) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 2 === 0 ? 0 : 7)
  ),
  new Monkey(
    [85, 64, 93, 64, 99],
    (item) => (item + 4) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 7 === 0 ? 7 : 2)
  ),
  new Monkey(
    [61, 92, 71],
    (item) => (item * item) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 3 === 0 ? 2 : 3)
  ),
  new Monkey(
    [79, 73, 50, 90],
    (item) => (item + 2) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 11 === 0 ? 4 : 6)
  ),
  new Monkey(
    [50, 89],
    (item) => (item + 3) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 13 === 0 ? 4 : 3)
  ),
  new Monkey(
    [83, 56, 64, 58, 93, 91, 56, 65],
    (item) => (item + 5) % (5 * 17 * 2 * 7 * 3 * 11 * 13 * 19),
    (item) => (item % 19 === 0 ? 1 : 0)
  ),
];

function round() {
  for (const monkey of monkeys) monkey.throwItems();
}

for (let i = 0; i < 10000; i++) round();

monkeys.sort((a, b) => (a.count > b.count ? -1 : 1));
console.log(monkeys[0].count * monkeys[1].count);
