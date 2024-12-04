const fs = require("fs");

let input = fs.readFileSync("input-3.txt", "utf8");

function getMulRange(index) {
  if (input.slice(index, index + 4) !== "mul(") return [-1, -1];
  const openingBracketIndex = index + 3;
  const arr = input.split("");
  const closingBracketIndex = arr.findIndex(
    (char, cbi) => cbi > index && char === ")"
  );
  if (closingBracketIndex === -1) return [-1, -1];
  const commaIndex = arr.findIndex(
    (char, ci) =>
      openingBracketIndex + 1 < ci &&
      ci < closingBracketIndex - 1 &&
      char === ","
  );
  if (commaIndex === -1) return [-1, -1];

  for (let i = openingBracketIndex + 1; i < closingBracketIndex; i++)
    if (arr[i] !== "," && (arr[i] < "0" || arr[i] > "9")) return [-1, -1];

  return [index, closingBracketIndex + 1];
}

function getProduct(range) {
  if (range[0] === -1 && range[1] === -1) return 0;
  const [factor1, factor2] = input
    .slice(range[0] + 4, range[1] - 1)
    .split(",")
    .map((input) => +input);

  return factor1 * factor2;
}

function getInstruction(index, instruction) {
  if (input.slice(index, index + 4) === "do()") return 1;
  if (input.slice(index, index + 7) === "don't()") return 0;
  return instruction;
}

let instruction = 1;

let result = 0;
for (let i = 0; i < input.length; i++) {
  result += getProduct(getMulRange(i)) * instruction;
  instruction = getInstruction(i, instruction);
}

console.log(result);
