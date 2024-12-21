let input = `826A
341A
582A
983A
670A`;

input = input.split("\n");

const NUM_ROBOTS = 25;

const numericPad = {
  0: [1, 3],
  1: [0, 2],
  2: [1, 2],
  3: [2, 2],
  4: [0, 1],
  5: [1, 1],
  6: [2, 1],
  7: [0, 0],
  8: [1, 0],
  9: [2, 0],
  A: [2, 3],
};

const directionPad = {
  "^": [1, 0],
  "<": [0, 1],
  v: [1, 1],
  ">": [2, 1],
  A: [2, 0],
};

const blankFreq = {};
const directionKeys = ["^", "A", "<", "v", ">"];
for (const a of directionKeys)
  for (const b of directionKeys) blankFreq[a + b] = 0;

const newSeqDict = {};
for (const key in blankFreq) {
  let [x, y] = directionPad[key[0]];
  const [gx, gy] = directionPad[key[1]];
  let val = "";

  if (gx - x === 0 && gy - y === 0) val = "";
  else if (gx - x === -2 && gy - y === 0) val = "<<";
  else if (gx - x === -1 && gy - y === 0) val = "<";
  else if (gx - x === 1 && gy - y === 0) val = ">";
  else if (gx - x === 2 && gy - y === 0) val = ">>";
  else if (gx - x === 0 && gy - y === -1) val = "^";
  else if (gx - x === 0 && gy - y === 1) val = "v";
  else if (gx - x === -2 && gy - y === 1) val = "v<<";
  else if (gx - x === 2 && gy - y === -1) val = ">>^";
  else if (gx - x === -1 && gy - y === -1) val = "<^";
  else if (gx - x === 1 && gy - y === 1) val = "v>";
  else {
    switch (key) {
      case "Av":
        val = "<v";
        break;
      case "^<":
        val = "v<";
        break;
      case "vA":
        val = "^>";
        break;
      case "<^":
        val = ">^";
        break;
    }
  }

  val += "A";
  newSeqDict[key] = val;
}

function isNumericSequencePossible(sequence) {
  let x = 2;
  let y = 3;
  for (const char of sequence) {
    switch (char) {
      case "^":
        y--;
        break;
      case "<":
        x--;
        break;
      case "v":
        y++;
        break;
      case ">":
        x++;
        break;
    }
    if (x === 0 && y === 3) return false;
  }
  return true;
}

function getPermutations(sequence) {
  const freq = {};
  for (const char of sequence) freq[char] = (freq[char] || 0) + 1;

  const permutations = new Set();

  function recursion(permutation = "") {
    if (permutation.length === sequence.length) {
      permutations.add(permutation);
      return;
    }

    for (const char in freq) {
      if (freq[char]) {
        freq[char]--;
        recursion(permutation + char, freq);
        freq[char]++;
      }
    }
  }

  recursion();

  return [...permutations];
}

function getSequencesNumericToDirectional(numeric) {
  let x = 2;
  let y = 3;

  let sequences = [""];

  for (const char of numeric) {
    const [gx, gy] = numericPad[char];

    let partial = "";

    while (y > gy) {
      y--;
      partial += "^";
    }

    while (x < gx) {
      x++;
      partial += ">";
    }

    while (y < gy) {
      y++;
      partial += "v";
    }

    while (x > gx) {
      x--;
      partial += "<";
    }

    const newSequences = [];
    const permutations = getPermutations(partial);
    for (const sequence of sequences)
      for (const permutation of permutations)
        if (isNumericSequencePossible(sequence + permutation))
          newSequences.push(sequence + permutation + "A");
    sequences = newSequences;
  }

  return sequences;
}

function sequenceToFreq(sequence) {
  const freq = { ...blankFreq };
  sequence = "A" + sequence;
  for (let i = 0; i + 2 <= sequence.length; i++)
    freq[sequence.slice(i, i + 2)]++;
  return freq;
}

function getFreqDirToDir(freq) {
  const newFreq = { ...blankFreq };

  for (const key in freq) {
    if (freq[key] === 0) continue;

    const newSeq = "A" + newSeqDict[key];
    for (let i = 0; i + 2 <= newSeq.length; i++)
      newFreq[newSeq.slice(i, i + 2)] += freq[key];
  }

  return newFreq;
}

function getComplexity(code) {
  const sequences = getSequencesNumericToDirectional(code);

  let length = Infinity;

  for (const seq of sequences) {
    let freq = sequenceToFreq(seq);
    for (let i = 0; i < NUM_ROBOTS; i++) freq = getFreqDirToDir(freq);
    length = Math.min(length, getLength(freq));
  }

  const number = +code.slice(0, 3);

  return length * number;
}

function getLength(freq) {
  let sum = 0;
  for (const key in freq) sum += freq[key];
  return sum;
}

const result = input.reduce((sum, code) => getComplexity(code) + sum, 0);
console.log(result);
