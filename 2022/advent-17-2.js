class Rock {
  constructor(rockType, y) {
    switch (rockType) {
      case 0:
        this.pattern = [["#", "#", "#", "#"]];
        break;
      case 1:
        this.pattern = [
          [".", "#", "."],
          ["#", "#", "#"],
          [".", "#", "."],
        ];
        break;
      case 2:
        this.pattern = [
          ["#", "#", "#"],
          [".", ".", "#"],
          [".", ".", "#"],
        ];
        break;
      case 3:
        this.pattern = [["#"], ["#"], ["#"], ["#"]];
        break;
      case 4:
        this.pattern = [
          ["#", "#"],
          ["#", "#"],
        ];
    }
    this.x = 3;
    this.y = y;
  }

  move(dir) {
    function isValid(x2, y2, pattern) {
      for (let i = 0; i < pattern.length; i++)
        for (let j = 0; j < pattern[i].length; j++) {
          if (pattern[i][j] === "#" && tower.grid[y2 + i][x2 + j] !== ".")
            return false;
        }
      return true;
    }
    let [x2, y2] = [this.x, this.y];
    switch (dir) {
      case "<":
        x2--;
        break;
      case ">":
        x2++;
        break;
      case "D":
        y2--;
    }
    let valid = isValid(x2, y2, this.pattern);
    if (valid) [this.x, this.y] = [x2, y2];
    return valid;
  }
}

class Tower {
  constructor() {
    this.windPattern =
      ">>><>><<<<><<<>>><><<<<>>>><<<><>><>>><<<><<>>><<<><<><>>><<<><<<<><>>>><<<<>><<>>>><<<>><<<<>>><<<>>>><<<<>>>><<<><>>>><>>><><<>>><<<<>><<>>>><<><<>><<<<><<<><<<>><<>>><<<>>>><<<<><<<>><<><<<>><>>><<>>><<<<>>><><<<<>><<<<>><>>>><><>>><<<<><<>>><<<<>><<<<>>>><<<>><<>><<<<>>>><<><<<<>>>><<<<>>><<<<>>><<<>>>><><>><>>>><<<>>>><<>><<>>>><<<<>><>>><><<<<>>>><<<<><<><><<<>>>><<<><<>>><<<<>>><<>>><>>>><><<<>>><><<<>>>><>>><<><>><<<>><<<<>><<<<>><>><<<<><>>>><>>><<<>><>><<<<>>><<>><<<><<<<>>><>>><>>><>>><<>>><<<<>><<<>><<<<>>><<>><<<>><>>><<<<>>>><<<<><<>>><<<>>>><<<>>><<<>><<<<>>><<><>><<>><<>>><<<>>><<<>>>><<<<>>>><<<<>>><<<<>><<<>>>><><<>>><>>>><<<<>>>><<<>>>><<<<><><>>><<><<<>>>><<<><<<<><<>><<<><<>>><<<<><<><<>><<<>>><<>>><<<>>>><<><<<<><<<>><>>>><<<<>>><<<><<<<>><<<>><<<<>><>><<<>>>><<<>><<>>>><<<<>>>><<>>><>>><>>>><<>>><<<>>><<<>>><<<><><<>>>><><<<>>>><<<<>>>><>><<>><<<>>><>>>><<>>>><><>><>>><<<><<<>>><<<<><<>><<<<>>><<<>><>>>><<<<>><<<<>>><<>>>><<<<>>><<<>>><<<><<<><<>><><<><<<<>>><<<>>>><<<<><<<>>><><<<<>>>><<<>>>><<<><<<>>>><<<<>>>><<<>>>><<<>>><>><<>>>><<<<>><<>><<<<>>>><<><<<<>><<<<>><<<>>>><<<><<<>>><<>>><<<<>><>>><>>>><>><>>>><<><<>><<<<>>><<>><>><>><<<>><<>>>><<>>><>>>><>>><>>>><>>><<<>>><<<<><><<<>>><<<>>><<<>>>><<><<>>><>>><>>><>>><<<<>><<<<>>><<>>><<>><>>><<>>>><<>>><<>>><<>><>>>><<><<>>><<<>><<<<>>>><<><<>>>><<<>><<<><<<<>>>><<<<><><<>>><>>><<<>><>><>><<<<>>><>>><>>>><<<<>>>><><<<><<<><>>>><<<>>><>><<<<>><<<>>><<<<>><<<><<<>>><<>><>>>><>>><<<<>>>><><<><<>>><<<<>><<<<><>>>><<<>>><<<<>><<<><><<<<>><<<<>>><>>>><>>>><<>>><<<<>><<<>><<<><<>><<<>>><<><<<<><<<<>>><<<<>>>><<>>><>>><<><<>>>><<>>><>>>><<<><<>>>><<<>>><<>>><<>><<<<>>><><>>>><<<>>>><<<<>>><<<>>><>><>>>><>><>><<<<>><<<>>><<<<>>>><<>><><<<>>><<<<>><>>><>>><><<>><<<>>><>>>><>>>><<><<<>><>><<<<>>>><<<<>><<>>><<>>>><>><<<<>><><<>>><<<>><<<<><<>>>><<<><>>>><<<>><<<><<<>>><<>><<>><<<>>>><<<<>>><<<<><<<>><<<<><<>><<<<>><<<><>><<>>>><<>><<<<>><<>>><>><<>><<>>>><<><<<>><<<<><<<<>>><<<>>>><>>><<<>>><><<<>><<<<>>><<<<><<<>>>><<><<<><<>>>><>>><<>><<<<>>><>><<<<>><><>>>><>><<>><<<>>><<<>>>><><<>>>><<>>>><<<<>><>><<<>><<<><<<<><<>>><><<<<>>><>>>><<<>>><<<<>>><>>>><><<<<>>><><<<<>><<<><<<>>><<<>><<>>><>><<>>>><>><<>><<<<>><<>>>><<>>><<<>><>>><<><<<<>><<<>><>>><<<<><>><<<<>><><<<<>><<<>>>><<<<>><<<<>>><<<<><<>><<><<<<><><<>>><>>>><<<<>>><<>>>><<>><><>>><<<<>>><><>>><<<>><<>><<>><<<<>>>><<<>>><<<>><>>><<<<>><<><>>>><<<>>>><<<>>><>>>><<<<><>>>><>><<<<>><<<>><<>>><<><<>>><<>>><<<>>><>>><<<>>><<><<><>>>><<<>><<<<>>><>><<>><<<>>>><>>><<<<>><>>>><<<<>><<<>><<<>>>><><<>>><<>><<>><<>>><>><<<><<<<>><>>><<>><<<>><>>>><<<<>><<<>>><<<<>>>><<<>><<<<>>>><>><>><<<<><<<<>>>><<>><>><<<<>>><<>>><<<>>><<>>>><<<>>>><>>><>><<<>>><><<<>><>>><<<><>><<<>><<<><<<<>>><<><<<>>>><<<<><<>>><<<<>><><<<><<>><<<<>>>><<<<>><<<<>><<>>>><<>><<<<><<<>>><<>>><<<<>>>><<><><<<>>><<>><>>><<<<>>><<<>>><><<<<><<>><<<><<>><<<<>>><<>>><<<<>>>><<<<><<>><<>>><>>><<<<><<<<>><<>>>><><><<>>>><>>><>><<<<>>>><<<<>><<<<>>>><<<<>>>><<<<><<<>>>><>><<>>>><>>>><>>><<<><><>>>><<>>>><<<>>>><<>>>><<<>><<<>>>><<<<>><<>>><>><<<<>>>><<<><<>>><<><<<<>>><<>>><<<>>><<<<>>>><<<<>>>><<>>>><<<>>>><>><<<<>>><<<<><<<<>>><<<<>><<<<><><<<<>>><<>>><<<>><<<>>>><<<<>><<>>><<<>>><<<<>>>><>><<<<><<<<>>>><<<<>><<<>>><<<<>>>><<>>><>><><<>>><<<>>>><<<<>><<><<<>>>><>>>><<><<<>><<<>><<<>>><<<<>>>><>><<><<<<>>>><<<<>>>><>><<<<>><<>><<>><<<><<<<>><<><<<><<>><><<<>>><<<<><>><>><><<<>>><<>>><><<<>><>>>><>>>><>><>><>><>>>><<<<>>><>>>><>>>><<>>>><<<<>>><<><<<>>>><<<>>>><<<<>><<<<>><<><<>><>>>><<<>>>><<<>>><>><<>>>><<>><<>>><>>>><<>>><>>><<<>><>><<<>>>><<<<>>>><<<>><<<<>>><<<<>>><>>>><<>>><<>>><<>>><>>>><<<<>>><<>><>>>><>>><<<<>>><<>>><>>><<<<>><<><>>><<><<<<>>>><<<<><<>>>><<<<>>><>><<<>>>><<>><<<<><<<<>>><>>>><<<<>>>><<<<>><>><>>>><<<<><<<<>>><<>><<<<>>>><<<><>>>><<<<><<>>>><<<<>>><<<<><><<<<>>><><<<>><>>><<<<>><<><<<<>><>>><<<<>>>><<<<>><<><<>>><<<<>>><<>><<<<>><>>><<>>>><>><>><<<<>><<<>><<<>><<>>><>><<>>><>>>><<>><>><<<<>>><<<><<<><><<<<>>><<<>><<<<><<>><<<>><<<<><>>>><<><<<>><><<<>>><<<>>><<<<>>><<<<><><<><>>><><>><><>>>><<>>>><<><>>><<>>>><><>>>><<><<<<>>>><>>><<>>><<<><<<>>><<<<>>>><<<<><<>>>><>>><>>>><<<<><<<>><<<<>>>><<<>>>><<<<>>><<<<><<<><<<<><<<<>>><<<<>>><<<>>>><>>><<<>>>><<<>><<<<>>>><<<<>>><<<<><<<<>>><<>>>><<<><<<<><<<>>>><<<><<<<><<<<><>>>><><<<<>>>><<>>>><>><>>><<>>>><<<<><<<><>><<>>>><<<<>>><<><>>>><<<<>>><>>><<<<>>><>>><<<>>>><>>><<<<><<<<>><>>><>>>><>>>><<<><><>><<>>>><<<<><><<<<>>><<<><>><<>>>><<<<>>>><<<<>>>><<<<>><<>>><<<<>>>><<<<><<<>><>>>><>><<<><<<>>><>><<<<><<<<>><<>><<>><<>>>><>><<<<>>><<<<>>>><<<<><<><>>><<<<>>>><>><<<>>><><<>>><<<<>>>><>><<>><<<>><>><><<>>><<<<>>><<><<<<><<>>>><<<<>>>><<<>>>><><>>>><<><<<><<>>><<>>>><<<>>>><<<>><<<<>><>>><><<<<>>>><>>><<<<>>>><>><<>>><>>>><<<>>>><<><<>>><<<>>><<>><>><<>>>><<<<>><>><<<<>><<><<><<<<>>>><<<<><<<>><>>><<<<><>><<<><<>><><><<>>>><<<<>>><<<><<<<><<>>><<<>>><<>>>><>>>><<>>><<>>>><<<<>><<>>><>>><><<>><<<<>>><<<><<<>><<>><<<>>><>>><<<<>><<<<><>>><>><<>>><<<>>>><<<<>>><>>><>>><<>>>><<<>><<<>>><>><<>>>><<>><<<<>><>><>>><><<>>><<<>><<<>>><<>>><<<<>>>><<><<<<>>><>><<<<>>>><<<<><>>><<<<>>><<><<<<>><<<<>><<>>>><>>><<><>>>><<<<>>><<<><<<>>>><<>>>><<<<>>><>><<<<><<<<>>>><>><<<>><>>>><>>>><><<<>>><<>>><<>><<<<>>><<<><<<>><<<>><<<>><<<<>>>><>><<>>>><>><<<<>>><><<<<><<><>><<<<>>>><<<><>>>><<<<>>><<>>>><<<>>>><<<>><<>><<<><<<<>><<<>>>><<>><><<<>>>><<<>><<<<>><>>>><<<>><<>><<>><<<>>><<>>>><<>>><>><>>>><<<<>>><>>><<>>>><><<<>><<<<>>>><>>><><<<>><<<>>><<<<>>><>>>><><<>>>><<<><<<<>>><<<>><>>><><<>>><>>>><<><><<><<<<>>>><>><>><<>>><><<<<>>>><<<<>>><>>>><<>>><<<>><>><<>>>><<><>>>><<<<>>><<<>>><<<<><<<<><>><<<>><<<>>>><<<<>><<<<>>><>>><<><<<<>>><<<><<><<<>>><<<<>>>><<><<<<>>><>><<>>>><<><<<>>>><<><<<>><<<<><<<<>>><<<<>>>><<<<>><>>>><<<><<<>>>><<<>>>><<<>>><>><>><<<>><<><>>>><<<<>><<<>>><<<><><<>>>><>><>>><>>>><<<>>>><<>>>><<>>>><<><>>><<>>><<>>>><<>>><><<<<>>>><<<>>><<<<>><<>>><<<<>><>>><>>>><>><><<><<<<>>>><>><<<<>>><<><<>>>><<>>><<<<>>><<<<>>>><<<>>>><<>>><<>>><<<><>>><<<><<>><<>><<<<><<<><<<<><<<><<<<>>>><<<>><>><<>>>><<<<>>>><<>>>><>>><<>>><<>>>><<<>>>><<<<>>>><<>>><<>>>><<>><<><<<<>><<<<>>><<<<>>><<>>><<<<>>><<<>>>><<>><<>><<<>>><><<>>><><<<><<<>>>><<<>>>><<<>><<>><<>><<>>>><<<><<<<>>>><>><<<<>>><<<>>><>>><<>>><<>>>><<<>><<<<>><>><<<<><<>>><<<<>>>><<<<>><><>>>><>>>><><<<>>>><<<<>>><<<<>>>><<<<><<>>><<>>>><>>>><<<<>>><>>><<>>><<<><<>><>>>><<>><>>><>><>>><<<<><<<>>>><<>>>><>>><>>><>>>><<<><<<<>>><<<>>>><<<><>>><<<>><>><>><<<>><<<>>><<<>>>><>><><>>><<<><><<<<><<>><<<<>>><<<>><<<<>>><<<>>><<<<>>><<<>>><<<>>><<<>>>><<<<>>>><<<<><<<>>><<><<>>><<<<>>>><<>><<<<><>><<<<>><>><<<>>><<>>>><>><>>><<<>><<<><<<>><<<>><<<<>>><<<<>>><<<<>>><<<>>>><<<>><<<<>><<><<<>>><>>>><<>>><<<<><<>>><>>>><<<<>><<>>><<><>>><>>><<<<>>><<><<<><>>><<<>>><<>>><<<<><<><<<<>><<<<><<<>>><>><<>>>><<<>>>><<<<><<><<<<><<<<>>><>><<<><<>>>><<<<>>>><<<<>>><<<>>><<<>>><<<<><<<>>>><<<<>><<<>><<<<>><><>><>><><<<>><<<>>><>>>><<<>><<<<>><><>>>><<<<>>><<<<>>>><<<>><<<>>>><<<>>><<<>>><<<>><<>>>><><<<><<>>>><<<>><<>><<>>>><>>>><>>>><<>>>><<><<<>>>><<<>><<>>><<><<<<>>><<<<>><<<>><>><<<>>>><<<><<>>>><<<><<>><<>>><<<>>><<><>>><<<>>><<<>>><>>>><<<<><<<<>>><>>>><<<>>><<><<>><<<<>>>><<<<><<>>>><<<>>><<<><<>>>><<<<><>><<<>>>><<<<>>>><<><>>><<<>><<<>>>><<>>>><<>>>><<>>><<>><<>>><<<<><<<>>>><>><<<<>><><<>>><>><<<<><>><<>><><><>>><<>>>><>>>><<<<>><<<>>><<<<>>>><<<<>>><<<>>>><<>>><<>>><><>>>><<>><><<>>><<>>>><<<>>><<<<>>><<<>>><<>>><<<<>><<<<>><<<<>><<<>><<<<>>>><<<>>>><<<<><<<<>>>><>>><<<<>>>><<<>>><<<<><<<<><<><<<<>>>><>>>><>>><<<>>>><<><<<><<<<>><<<<>>><<>>>><<>><<<>>>><>>><>>>><>>><<>><<<>>>><<<>>><<>>>><>>><<<>>><<>><<>>><<<>>>><<>>>><<><<<>>><<><<<>><<<<><<<>><<><>><<<>>><<>>><<<>>><<<<><<<<><<<<><><>>>><<<>><>>><>>><<<>>>><>>><>><<<<>>><<<><<<>>>><>>><<<<><<<>>>><<<<>>>><<<><>><<<>><<<<>>><<<<>><<<<>><><<<<>>>><>>>><<>><<<<><<<><<<>>><<<>><<><<><>>><<<<>><<>>><<>>>><<<<><<<<><<<<>>><<>><<<<>>>><<<<>>>><<<>>>><<<<>><<<>><<<<>>>><<<<><<>><<<>>>><<><<<>><<<><<><<<<>>><>>>><<>>>><<<<>>>><<>><<<>>><>><<>>>><<<>>>><>>><<<<>>>><>>>><<>><><<<<>>><<>>><<>><<><>><<<>>>><>>>><>>>><><<<<>><<<>>><<<>>>><<<<><<<<>>>><<>>><<>>>><<>>>><><<><<>>><<><<>>><<><>>>><<>><<<>><<><<<<>>><<<>>>><<<<><>><<>>><<<>>>><<>>>><<>>>><<<>>>><<<<>>>><<>>>><<<><><>><>>><<<><<<>>>><><<<<>>>><<<<>>>><<>>><>>>><>>><<<<>>><<<>>><<<><>><<<<><<<<>>><>>>><>><<<>>><<<><<<<>>>><<>>><<<<><<<<><>><<<>>>><<<<>>><>>><<<<>><<>><<<<>>>><>>><<<<>><<<<><<><><<<<>><<<>><<<>><<<>><<<>>><><<>>>><<><<<<>><<<><<<<>>><<<<>><><>><>>>><<<<>>><<><<<>><<<><<>>><>><>><<<>>>><<>>>><>><<<<>><<<<><<<<>>><<<<>><<<>>>><<<<>>>><<><>>><<<>>><<>><<>><><<><<>>>><<<><<>>><<><<>>><<>>>><<<<>><<>>><<<>>><<<>>>><<><>>><<>>><>>><<<><<<><<>>>><<<<>>><<<<>>><<<>>><<<<>><><>>>><<<>>>><>><>>><<<>>><<<<>><>>>><>>><<<><<<><<<<><<<<>>><<<><<<><>>><<<<><<<<>><>><<>>><<<>>><<<<><<>>><<<>>>><>>>><<<>>><<<<>>><<<<><>>>><<>><<<><<<>>><<<><<<<>>>><<>><<<>><>><<<<>>><>>><<<<><><<<<>>><<>>>><<>><>>>><<<>><>>><<<>><<<<>>>><<<>><<<<><<>>><>>>><<>><<<<>>>><>><<>><<<<>>><<>>><>>>><><><><<<<>>><>>><>>>><<<>><<><<<><>><<<<>><>><<><<<>>>><><<<>>><<>>><<>><<<<><<<<><<<<>><<<>>>><><<>>>><<>>><<><<<>><<<>><<<<>>>><>>>><<<<>>><<<<>>><<<<>><>>>><<>>>><>><><<>>>><<<><><<<<>><<>><<><<<<>>><<>><>><<<>>>><<>><<>>>><<>>><<<<>>><<<<>>>><<<>>>><>>><>>>><<<<>>>><<<<><<<><<>>><<<>>><<><>>>><<><<<>>><<<<><<<>><<<<>><<>>><<><<<>>><>><>><<<>>><<>>>><><<>>><><<<>><<<<>>>><<>><><<<>>>><><<<<><<<>>>><<<<>><<>>>><>>>><<>><<<<><<<<>>><<>>>><<>>><<>>>><<<>>>><<>><<><>><<<>><<<>>><<>>><<<<>>><<>><<<>><<<<>><<<><<>>><<<<>>><<<><<<<>><<>><<<<>><<>><<>>><<<>>><<>>><<>><<<>><<<>>>><>>><>><<<<>>><<>>>><>>>><<<<>>>><>>><<<<>>><<<>>>><<<<>>>><<<>>><<>>>><<<>><>>>><<<<>><<<>><><><<<><>>>><<<>><><>>>><<<>>><<<<>>>><<>>>><<>><<>>><<<<>>>><<<><>>>><>><<>>><<<>>><<<<><<<>><<<<><<<>>><>>><<>>><<><>>><<>>>><><<>>>><>>>><<<<><<<><><<>><<<>><<><<<>><<><<>><<<<>>>><<<>><<<<>>><<<<>>>><<<>><<<><<<>>>><<<>>>><><><<><><>>><<<>>>><>>><<<>>><<<<>>><><<<>>>><>><>>><<><<><<>>>><<<<>>><<<<>>>><><><<>><<<<>>><<<<>>><<<<><<<>><<<>>><<<<>>><<>><<>>><<<<>><<<><<<<><<<>>><<>>><<<>>><>><";
    this.time = 0;
    this.rockType = 1;
    this.grid = ["+-------+".split("")];
    this.activeRock = new Rock(0, 4);
    this.rockCount = 0;
    for (let i = 0; i < 4; i++) this.addRow();
  }

  addRow() {
    this.grid.push("|.......|".split(""));
  }

  printGrid() {
    let str = [...this.grid].map((row) => row.join("")).join("\n");
    return str;
  }

  cycle() {
    let wind = this.windPattern[this.time];
    this.activeRock.move(wind);
    let valid = this.activeRock.move("D");
    this.time = (this.time + 1) % this.windPattern.length;
    if (!valid) {
      this.rockCount++;
      this.writeRockToTower();
      this.activeRock = new Rock(this.rockType, this.highestPoint + 4);
      this.rockType = (this.rockType + 1) % 5;
      while (this.highestPoint + 8 > this.grid.length) this.addRow();
      return false;
    }
    return true;
  }

  writeRockToTower() {
    let { x, y, pattern } = this.activeRock;
    for (let i = 0; i < pattern.length; i++)
      for (let j = 0; j < pattern[i].length; j++)
        if (pattern[i][j] === "#") this.grid[y + i][x + j] = "#";
  }

  get highestPoint() {
    for (let y = this.grid.length - 1; y >= 0; y--)
      for (let x = 1; x <= 7; x++) if (this.grid[y][x] !== ".") return y;
  }
}

let tower = new Tower();
let memo = [];
while (tower.rockCount < 999800) {
  if (!memo[tower.rockCount]) memo[tower.rockCount] = tower.highestPoint;
  tower.cycle();
}

let str = tower.printGrid();
str = str.replaceAll("\n|.......|", "");
let highestPoint = tower.highestPoint;

str = str.slice(10);
// let half1 = str.substring(0, 10 * 5);
// let prev;
// for (let i = 5; i < highestPoint; i++) {
//   let half2 = str.substring(i * 10, i * 10 + 10 * 5);
//   if (half1 === half2) {
//     console.log(i, i - prev);
//     prev = i;
//   }
// }
// console.log(half1);

console.log(highestPoint, tower.rockCount);

// 1000000 rocks
// highest point 1542939

// ...
// 1535464 2623
// 1538087 2623
// 1540710 2623
// ...
// 999,999,999,182 2623

// 1488250 +2623
// 1490873 +2623
// 1493496 +2623
// 1496119 +2623
// 1498742 +2623
// 1501365 +2623
// 1503988 +2623
// 1506611 +2623
// 1509234 +2623
// 1511857 +2623
// 1514480 +2623
// 1517103 +2623
// 1519726 +2623
// 1522349 +2623
// 1524972 +2623
// 1527595 +2623
// 1530218 +2623
// 1532841 +2623
// 1535464 +2623
// 1538087 +2623
// 1540710 +2623

// highestPoint rockCount
// 1488250 964544
// 1490873 966244 +1700
// 1493496 967944 +1700
// 1496119 969644 +1700
// ...
// 1540710 998544 +1700
// ...
// 1,542,941,174,548 999,999,998,744 +1700

// highest point       rocks
// 1                   |..####.|      1
// 2                   |...#...|
// 3                   |..###..|
// 4                   |#####..|      2
// 5                   |..#.#..|
// ...
// 1538087             |..####.|      996844, 996845
// 1538088             |...#...|      996846
// 1538089             |..###..|
// 1538090             |#####..|
// 1538091             |..#.#..|      996847
// ...
// 1540710             |..####.|      998544, 998545
// 1540711             |...#...|      998546
// 1540712             |..###..|
// 1540713             |#####..|
// 1540714             |..#.#..|      998547
// ...
// 1542642                            999,800
// ...
// 1,542,941,174,548   |..####.|      999,999,998,744
// 1,542,941,174,549   |...#...|
// 1,542,941,174,550   |..###..|
// 1,542,941,174,551   |#####..|
// 1,542,941,174,552   |..#.#..|
// ...
// 1,542,941,176,480                  1000000000000

// # 1542941176477 too low
// # 1542941176481 too high
