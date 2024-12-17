let input = `Register A: 60589763
Register B: 0
Register C: 0

Program: 2,4,1,5,7,5,1,6,4,1,5,5,0,3,3,0`;

input = input.split("\n\n");
input[0] = input[0].split("\n").map((str) => +str.split(": ")[1]);

const program = input[1]
  .split(": ")[1]
  .split(",")
  .map((str) => +str);

// needs to run program with 15 repeats (+1 initial)
// 35184372088832 <= registerA < 281474976710656

// loop i
// 2,4, register.B = register.A % 8
// 1,5, register.B = register.B ^ 5
// 7,5, register.C = Math.floor(register.A / 2 ** register.B)
// 1,6, register.B = register.B ^ 6
// 4,1, register.B = register.B ^ register.C
// 5,5, program[i] === register.B % 8

// start next loop:
// 0,3, register.A = Math.floor(register.A / 8)
// 3,0, end loop if register.A === 0

// register.B = (((register.A % 8) ^ 5) ^ 6) ^ Math.floor(register.A / 2 ** ((register.A % 8) ^ 5))
// register.C = Math.floor(register.A / 2 ** ((register.A % 8) ^ 5))

function getOutputDigit(registerA) {
  return (
    registerA % 8 ^ 5 ^ 6 ^ Math.floor(registerA / 2 ** (registerA % 8 ^ 5)) % 8
  );
}

function getNewPossible(possible) {
  const newPossible = [];
  for (const registerA of possible)
    for (let i = 0; i < 8; i++) newPossible.push(registerA * 8 + i);
  return newPossible;
}

function filterPossible(possible, loop) {
  const outputDigit = program[loop];
  return possible.filter(
    (registerA) => getOutputDigit(registerA) === outputDigit
  );
}

let possible = [3];
for (let loop = 14; loop >= 0; loop--) {
  possible = getNewPossible(possible);
  possible = filterPossible(possible, loop);
}

const result = possible[0];
console.log(result);

//             registerA
// 0: loop 15: 3
// 3: loop 14: 24, 25, 29, 31
// 3: loop 13: 192->207, 232->239, 248->255
// 0: loop 12:
// 5: loop 11:
// 5: loop 10:
// 1: loop 9 :
// 4: loop 8 :
// 6: loop 7 :
// 1: loop 6 :
// 5: loop 5 :
// 7: loop 4 :
// 5: loop 3 :
// 1: loop 2 :
// 4: loop 1 :
// 2: loop 0 :

// Digits: 1 RegisterA: 1
// Digits: 2 RegisterA: 8
// Digits: 3 RegisterA: 64
// Digits: 4 RegisterA: 512
// Digits: 5 RegisterA: 4096
// Digits: 6 RegisterA: 32768
// Digits: 7 RegisterA: 262144
// Digits: 8 RegisterA: 2097152
// Digits: 9 RegisterA: 16777216
// Digits: 10 RegisterA: 134217728
// Digits: 11 RegisterA: 1073741824
// Digits: 12 RegisterA: 8589934592
// Digits: 13 RegisterA: 68719476736
// Digits: 14 RegisterA: 549755813888
// Digits: 15 RegisterA: 4398046511104
// Digits: 16 RegisterA: 35184372088832
// Digits: 17 RegisterA: 281474976710656
