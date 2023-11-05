let input = `on x=4..48,y=-44..10,z=-45..4
on x=-41..3,y=-28..23,z=-4..44
on x=-11..36,y=-3..47,z=-6..41
on x=-38..14,y=-23..22,z=-33..18
on x=-37..13,y=-43..5,z=-20..26
on x=-44..4,y=-8..43,z=2..46
on x=-41..6,y=-39..5,z=-25..20
on x=-8..42,y=-19..26,z=-45..9
on x=-21..31,y=-23..31,z=-47..6
on x=-33..20,y=-49..0,z=-23..28
off x=29..47,y=26..44,z=21..36
on x=0..49,y=-43..9,z=-21..28
off x=34..48,y=36..45,z=-13..0
on x=-4..42,y=-4..42,z=-45..1
off x=5..23,y=18..33,z=12..28
on x=-9..37,y=-7..37,z=-38..14
off x=18..30,y=13..28,z=1..19
on x=-43..10,y=-27..25,z=-36..16
off x=20..30,y=-46..-37,z=13..23
on x=-46..4,y=-2..47,z=-20..32`;

input = input
  .split("\n")
  .map((str) => str.split(",").map((str) => str.split("..")))
  .map((arr) => {
    if (arr[0][0].slice(0, 2) === "on") {
      arr.push(1);
      arr[0][0] = parseInt(arr[0][0].slice(5));
    } else {
      arr.push(0);
      arr[0][0] = parseInt(arr[0][0].slice(6));
    }
    arr[0][1] = parseInt(arr[0][1]);
    arr[1][0] = parseInt(arr[1][0].slice(2));
    arr[1][1] = parseInt(arr[1][1]);
    arr[2][0] = parseInt(arr[2][0].slice(2));
    arr[2][1] = parseInt(arr[2][1]);
    return arr;
  });

let cubes = [];
for (let i = 0; i <= 100; i++) {
  cubes[i] = [];
  for (let j = 0; j <= 100; j++) cubes[i][j] = Array(101).fill(0);
}

for (const [[x1, x2], [y1, y2], [z1, z2], val] of input)
  for (let i = x1; i <= x2; i++)
    for (let j = y1; j <= y2; j++)
      for (let k = z1; k <= z2; k++) cubes[i + 50][j + 50][k + 50] = val;

let output = 0;
for (const arr1 of cubes)
  for (const arr2 of arr1) for (const cube of arr2) output += cube;

console.log(output);
