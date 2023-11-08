let input = `
inp w
mul x 0
add x z
mod x 26
div z 1
add x 13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 8
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 16
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 4
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 5
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 0
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -5
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 10
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x 0
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -13
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 14
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 9
mul y x
add z y`;

input = input
  .split("\ninp w\n")
  .map((str) => str.split("\n"))
  .slice(1);

let history = {};
function runMONADRecursive(
  variables = { x: 0, y: 0, z: 0 },
  modelNumber = "",
  curr = history,
  depth = 0
) {
  if (depth === 4 && variables.z !== curr.parent.parent.z) return false;
  if (depth === 8 && variables.z !== curr.parent.parent.z) return false;
  if (depth === 10 && variables.z !== curr.parent.parent.z) return false;
  if (depth >= 10 && variables.z > curr.parent.z) return false;
  if (depth >= 14) {
    if (variables.z === 0) {
      console.log(modelNumber);
      return true;
    }
    return false;
  }
  for (let i = 1; i <= 9; i++) {
    curr[i] = { parent: curr };
    let next = { ...variables };
    next.w = i;
    for (const line of input[depth]) {
      let a = line[4];
      let valB = line.slice(6);
      if (valB >= "a" && valB <= "z") valB = next[valB];
      else valB = parseInt(valB);
      switch (line.slice(0, 3)) {
        case "add":
          next[a] += valB;
          break;
        case "mul":
          next[a] *= valB;
          break;
        case "div":
          next[a] = next[a] / valB;
          if (next[a] > 0) next[a] = Math.floor(next[a]);
          else if (next[a] < 0) next[a] = Math.ceil(next[a]);
          break;
        case "mod":
          next[a] %= valB;
          break;
        case "eql":
          next[a] = next[a] === valB ? 1 : 0;
          break;
      }
    }
    curr[i].z = next.z;
    if (runMONADRecursive(next, modelNumber + i, curr[i], depth + 1))
      return true;
  }
}

function runMONADSingle(modelNumber) {
  modelNumber = modelNumber.toString();
  let variables = { x: 0, y: 0, z: 0 };
  for (let i = 0; i < modelNumber.length; i++) {
    variables.w = parseInt(modelNumber[i]);
    for (const line of input[i]) {
      let a = line[4];
      let valB = line.slice(6);
      if (valB >= "a" && valB <= "z") valB = variables[valB];
      else valB = parseInt(valB);
      switch (line.slice(0, 3)) {
        case "add":
          variables[a] += valB;
          break;
        case "mul":
          variables[a] *= valB;
          break;
        case "div":
          variables[a] = variables[a] / valB;
          if (variables[a] > 0) variables[a] = Math.floor(variables[a]);
          else if (variables[a] < 0) variables[a] = Math.ceil(variables[a]);
          break;
        case "mod":
          variables[a] %= valB;
          break;
        case "eql":
          variables[a] = variables[a] === valB ? 1 : 0;
          break;
      }
    }
    console.log(i + 1, variables);
  }
  return variables;
}

runMONADRecursive();
