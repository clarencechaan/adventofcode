let input = `#############
#...........#
###D#C#B#C###
  #D#A#A#B#
  #########`;

let grid = input.split("\n").map((str) => str.split(""));

function cloneGrid(grid) {
  let result = [];
  for (const row of grid) result.push([...row]);
  return result;
}

function minEnergy(grid) {
  let history = [];

  let min = Infinity;
  let sum = 0;

  function recurse() {
    for (let y = 2; y <= 3; y++)
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
  if (y === 3 && grid[y - 1][x] !== ".") return [];
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
    for (let i = 1; i <= 3; i++)
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
  if (y < 2 || y > 3) return false;
  if (y === 2) {
    switch (x) {
      case 3:
        return grid[y][x] === "A" && grid[y + 1][x] === "A";
      case 5:
        return grid[y][x] === "B" && grid[y + 1][x] === "B";
      case 7:
        return grid[y][x] === "C" && grid[y + 1][x] === "C";
      case 9:
        return grid[y][x] === "D" && grid[y + 1][x] === "D";
    }
  }
  if (y === 3) {
    switch (x) {
      case 3:
        return grid[y][x] === "A";
      case 5:
        return grid[y][x] === "B";
      case 7:
        return grid[y][x] === "C";
      case 9:
        return grid[y][x] === "D";
    }
  }
}

function isPathToRoomPossible(x, y, grid) {
  let amphipod = grid[y][x];
  if (!amphipod) return false;
  let goalX = 3 + (amphipod.charCodeAt() - 65) * 2;
  let goalY = grid[3][goalX] === amphipod ? 2 : 3;

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
  return (
    grid[2][3] === "A" &&
    grid[3][3] === "A" &&
    grid[2][5] === "B" &&
    grid[3][5] === "B" &&
    grid[2][7] === "C" &&
    grid[3][7] === "C" &&
    grid[2][9] === "D" &&
    grid[3][9] === "D"
  );
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
