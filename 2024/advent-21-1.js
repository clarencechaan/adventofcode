let input = `826A
341A
582A
983A
670A`;

input = input.split("\n");

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

function getSequencesDirectionalToDirectional(directional) {
  let x = 2;
  let y = 0;
  let sequences = [""];

  for (const char of directional) {
    const [gx, gy] = directionPad[char];

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
        if (isDirectionalSequencePossible(sequence + permutation))
          newSequences.push(sequence + permutation + "A");
    sequences = newSequences;
  }

  return sequences;
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

function isDirectionalSequencePossible(sequence) {
  let x = 2;
  let y = 0;
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
    if (x === 0 && y === 0) return false;
  }
  return true;
}

function getComplexity(code) {
  let sequences1 = getSequencesNumericToDirectional(code);
  sequences1 = sequences1.filter(isNumericSequencePossible);

  let sequences2 = [];
  for (const seq1 of sequences1) {
    const arr = getSequencesDirectionalToDirectional(seq1);
    for (const seq2 of arr) sequences2.push(seq2);
  }

  let length2 = sequences2[0].length;
  for (const seq of sequences2) length2 = Math.min(length2, seq.length);
  sequences2 = sequences2.filter((seq) => seq.length === length2);

  let sequences3 = [];
  for (const seq2 of sequences2) {
    const arr = getSequencesDirectionalToDirectional(seq2);
    for (const seq3 of arr) sequences3.push(seq3);
  }

  let length = sequences3[0].length;
  for (const seq of sequences3) length = Math.min(length, seq.length);

  const number = +code.slice(0, 3);

  console.log(code, ":", length, "*", number, "=", length * number);

  return length * number;
}

const result = input.reduce((sum, code) => getComplexity(code) + sum, 0);
console.log(result);
