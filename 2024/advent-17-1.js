let input = `Register A: 60589763
Register B: 0
Register C: 0

Program: 2,4,1,5,7,5,1,6,4,1,5,5,0,3,3,0`;

input = input.split("\n\n");
input[0] = input[0].split("\n").map((str) => +str.split(": ")[1]);

const register = { A: input[0][0], B: input[0][1], C: input[0][2] };

const program = input[1]
  .split(": ")[1]
  .split(",")
  .map((str) => +str);

function getComboOperand(operand) {
  switch (operand) {
    case 0:
    case 1:
    case 2:
    case 3:
      return operand;
    case 4:
      return register.A;
    case 5:
      return register.B;
    case 6:
      return register.C;
  }
}

let instructionPointer = 0;
const output = [];

function runInstruction() {
  if (instructionPointer >= program.length - 1) return false;

  const [opcode, operand] = program.slice(
    instructionPointer,
    instructionPointer + 2
  );

  switch (opcode) {
    case 0:
      const numerator0 = register.A;
      const denominator0 = 2 ** getComboOperand(operand);
      register.A = Math.floor(numerator0 / denominator0);
      break;
    case 1:
      register.B = register.B ^ operand;
      break;
    case 2:
      register.B = getComboOperand(operand) % 8;
      break;
    case 3:
      if (register.A !== 0) {
        instructionPointer = operand;
        return true;
      }
      break;
    case 4:
      register.B = register.B ^ register.C;
      break;
    case 5:
      output.push(getComboOperand(operand) % 8);
      break;
    case 6:
      const numerator6 = register.A;
      const denominator6 = 2 ** getComboOperand(operand);
      register.B = Math.floor(numerator6 / denominator6);
      break;
    case 7:
      const numerator7 = register.A;
      const denominator7 = 2 ** getComboOperand(operand);
      register.C = Math.floor(numerator7 / denominator7);
      break;
  }

  instructionPointer += 2;
  return true;
}

while (runInstruction());

const result = output.join(",");
console.log(result);
