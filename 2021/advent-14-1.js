let input = `PHOSBSKBBBFSPPPCCCHN

KO -> H
OK -> P
BO -> C
SH -> V
PC -> F
NK -> N
PH -> K
VH -> S
NN -> S
VC -> P
OF -> O
HH -> S
VP -> K
KP -> O
NP -> F
SS -> V
HP -> S
PS -> F
BV -> P
KS -> H
SO -> H
NF -> N
CO -> V
HK -> F
OO -> N
KN -> F
SP -> V
OP -> S
OV -> V
HO -> V
PK -> N
FF -> N
CV -> S
PP -> B
CF -> P
HF -> B
BN -> C
FH -> S
ON -> K
SN -> N
CP -> N
OB -> O
HC -> F
KH -> P
OS -> S
NS -> C
BK -> H
PB -> P
SV -> F
FV -> C
BC -> K
HS -> N
PF -> V
NC -> N
CH -> H
VF -> H
KK -> B
OH -> K
HB -> C
SC -> B
VK -> C
FP -> C
SK -> N
VO -> K
FB -> S
KB -> N
BS -> S
VS -> C
CN -> K
KF -> F
NB -> O
BB -> C
CS -> C
FC -> K
NO -> B
SB -> C
CB -> N
BP -> S
NV -> H
NH -> N
PV -> K
PO -> C
VB -> O
FK -> P
HV -> O
KC -> S
VV -> O
VN -> H
BH -> K
FS -> O
KV -> K
HN -> P
OC -> B
SF -> V
CC -> F
CK -> P
FO -> C
PN -> K
BF -> C
FN -> O`;

input = input.split("\n\n");
let polymer = input[0];
let insertionRules = input[1].split("\n").map((str) => str.split(" -> "));

for (let step = 0; step < 10; step++) {
  let arr = [polymer[0]];
  for (let i = 1; i < polymer.length; i++) {
    arr.push("");
    arr.push(polymer[i]);
  }
  for (const [[a, b], c] of insertionRules)
    for (let i = 2; i < arr.length; i += 2)
      if (arr[i - 2] === a && arr[i] === b) arr[i - 1] = c;
  polymer = arr.join("");
}

let freqMap = {};
for (const char of polymer) freqMap[char] = (freqMap[char] || 0) + 1;

let output = Object.entries(freqMap).map((entry) => entry[1]);
output.sort((a, b) => (a > b ? 1 : -1));
output = output[output.length - 1] - output[0];
console.log(output);
