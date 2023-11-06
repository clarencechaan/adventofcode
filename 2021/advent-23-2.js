let input = `#############
#...........#
###D#C#B#C###
  #D#C#B#A#
  #D#B#A#C#
  #D#A#A#B#
  #########`;

let grid = input.split("\n").map((str) => str.split(""));

function minEnergy(grid) {
  let history = [];

  let min = Infinity;
  let sum = 0;

  function recurse() {
    for (let y = 2; y <= 5; y++)
      for (let x = 3; x <= 9; x += 2) {
        if (grid[y][x] === "." || isSquareSolved(x, y, grid)) continue;
        let spots = findPossibleRefugeSpots(x, y, grid);
        for (const x2 of spots) {
          let y2 = 1;
          let swap = [
            [x, y],
            [x2, y2],
          ];
          history.push(swap);
          [grid[y][x], grid[y2][x2]] = [grid[y2][x2], grid[y][x]];
          let energy =
            energyRequired(x2, y2, x, y, grid) + moveToGoalRooms(grid, history);
          sum += energy;
          if (isGridSolved(grid)) min = Math.min(min, sum);

          recurse();
          while (history[history.length - 1] !== swap) {
            let [[x1, y1], [x2, y2]] = history.pop();
            [grid[y1][x1], grid[y2][x2]] = [grid[y2][x2], grid[y1][x1]];
          }
          [grid[y][x], grid[y2][x2]] = [grid[y2][x2], grid[y][x]];
          history.pop();
          sum -= energy;
        }
      }
  }

  recurse();
  return min;
}

function findPossibleRefugeSpots(x, y, grid) {
  for (let y2 = y - 1; y2 > 1; y2--) if (grid[y2][x] !== ".") return [];
  let spots = [];
  for (let s = x - 1; x >= 1 && grid[1][s] === "."; s--)
    if (s !== 3 && s !== 5 && s !== 7 && s !== 9) spots.push(s);
  for (let s = x + 1; x <= 11 && grid[1][s] === "."; s++)
    if (s !== 3 && s !== 5 && s !== 7 && s !== 9) spots.push(s);
  return spots;
}

function moveToGoalRooms(grid, history = []) {
  let energy = 0;
  for (let done = false; !done; ) {
    done = true;
    for (let i = 1; i <= 5; i++)
      for (let j = 1; j <= 11; j++) {
        if (grid[i][j] < "A" || grid[i][j] > "D" || isSquareSolved(j, i, grid))
          continue;
        let room = isPathToRoomPossible(j, i, grid);
        if (!room) continue;
        done = false;
        let swap = [[j, i], room];
        history.push(swap);
        let [[x1, y1], [x2, y2]] = swap;
        energy += energyRequired(x1, y1, x2, y2, grid);
        [grid[y1][x1], grid[y2][x2]] = [grid[y2][x2], grid[y1][x1]];
      }
  }
  return energy;
}

function isSquareSolved(x, y, grid) {
  if (y < 2 || y > 5) return false;
  for (; y <= 5; y++)
    if (grid[y][x] !== String.fromCharCode((x - 1) / 2 + 64)) return false;
  return true;
}

function isPathToRoomPossible(x, y, grid) {
  let amphipod = grid[y][x];
  if (!amphipod) return false;
  let goalX = 3 + (amphipod.charCodeAt() - 65) * 2;
  let goalY = 5;
  while (grid[goalY][goalX] === amphipod) goalY--;
  if (grid[goalY][goalX] !== ".") return false;

  while (y >= 2 && x !== goalX) {
    y--;
    if (grid[y][x] !== ".") return false;
  }

  while (x > goalX) {
    x--;
    if (grid[y][x] !== ".") return false;
  }

  while (x < goalX) {
    x++;
    if (grid[y][x] !== ".") return false;
  }

  while (y < goalY) {
    y++;
    if (grid[y][x] !== ".") return false;
  }

  return [goalX, goalY];
}

function isGridSolved(grid) {
  for (let x = 3; x <= 9; x += 2)
    for (let y = 2; y <= 5; y += 2)
      if (grid[y][x] !== String.fromCharCode((x - 1) / 2 + 64)) return false;
  return true;
}

function printGrid(grid) {
  console.log(grid.map((row) => row.join("")).join("\n"));
}

function energyRequired(x1, y1, x2, y2, grid) {
  let amphipod = grid[y1][x1];
  let result = 0;
  if (x1 !== x2) result += Math.abs(1 - y1) + Math.abs(1 - y2);
  else result += Math.abs(y1 - y2);
  result += Math.abs(x1 - x2);
  result *= 10 ** (amphipod.charCodeAt() - 65);
  return result;
}

let output = minEnergy(grid);
console.log(output);
