let input = `86
149
4
75
87
132
12
115
62
61
153
78
138
43
88
108
59
152
109
63
42
60
7
104
49
156
35
2
52
72
125
94
46
136
26
16
76
117
116
150
20
13
141
131
127
67
3
40
54
82
36
100
41
56
146
157
89
23
8
55
111
135
144
77
124
18
53
92
126
101
69
27
145
11
151
31
19
34
17
130
118
28
107
137
68
93
85
66
97
110
37
114
79
121
1`;

input = input.split("\n").map((str) => parseInt(str));
input.sort((a, b) => (a > b ? 1 : -1));

const n = input.length;

let memo = [];
function numArrangements(idx = 0) {
  if (memo[idx]) return memo[idx];
  if (idx === n) return 1;
  let result = 0;
  for (let i = idx; input[i] - (input[idx - 1] || 0) <= 3; i++)
    result += numArrangements(i + 1);
  memo[idx] = result;
  return result;
}

let output = numArrangements();
console.log(output);