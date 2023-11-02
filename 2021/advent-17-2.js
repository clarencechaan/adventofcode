let input = `target area: x=287..309, y=-76..-48`;

let target = input
  .slice(13)
  .split(", ")
  .map((str) =>
    str
      .slice(2)
      .split("..")
      .map((str) => parseInt(str))
  );

function isTrajectoryValid(vx, vy, x = 0, y = 0, maxY = 0) {
  if (x > target[0][1] || y < target[1][0]) return false;
  if (
    target[0][0] <= x &&
    x <= target[0][1] &&
    target[1][0] <= y &&
    y <= target[1][1]
  )
    return true;
  let nextVx = vx;
  if (vx > 0) nextVx--;
  else if (vx < 0) nextVx++;
  let nextVy = vy - 1;
  return isTrajectoryValid(nextVx, nextVy, x + vx, y + vy, Math.max(maxY, y));
}

let output = 0;

for (let vy = 1000; vy >= -1000; vy--)
  for (let vx = 1000; vx >= 0; vx--) if (isTrajectoryValid(vx, vy)) output++;

console.log(output);
