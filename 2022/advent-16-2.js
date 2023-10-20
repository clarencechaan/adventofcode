let input = `Valve AW has flow rate=0; tunnels lead to valves LG, TL
Valve OM has flow rate=0; tunnels lead to valves XK, IM
Valve BG has flow rate=0; tunnels lead to valves MP, SB
Valve XB has flow rate=0; tunnels lead to valves MA, TL
Valve CD has flow rate=0; tunnels lead to valves VL, OF
Valve VF has flow rate=0; tunnels lead to valves CS, XK
Valve HK has flow rate=0; tunnels lead to valves RL, QB
Valve QN has flow rate=0; tunnels lead to valves IV, QR
Valve OF has flow rate=4; tunnels lead to valves TQ, CD, IR, IM, JE
Valve QB has flow rate=14; tunnels lead to valves HK, XE, CS, VO
Valve ZE has flow rate=7; tunnels lead to valves JB, NC, SE, OI
Valve OW has flow rate=0; tunnels lead to valves MB, JB
Valve MA has flow rate=0; tunnels lead to valves XB, MB
Valve MP has flow rate=0; tunnels lead to valves VK, BG
Valve UE has flow rate=9; tunnels lead to valves ZM, RZ, WI, HO, FO
Valve QR has flow rate=24; tunnel leads to valve QN
Valve TQ has flow rate=0; tunnels lead to valves OF, AA
Valve SE has flow rate=0; tunnels lead to valves ZE, ZZ
Valve AQ has flow rate=20; tunnel leads to valve CX
Valve XE has flow rate=0; tunnels lead to valves JQ, QB
Valve DC has flow rate=8; tunnels lead to valves ZD, MJ, RZ
Valve ZM has flow rate=0; tunnels lead to valves YJ, UE
Valve VK has flow rate=21; tunnel leads to valve MP
Valve VR has flow rate=0; tunnels lead to valves WV, PS
Valve BH has flow rate=0; tunnels lead to valves AA, MB
Valve ZR has flow rate=0; tunnels lead to valves LG, AI
Valve JE has flow rate=0; tunnels lead to valves OF, HO
Valve IR has flow rate=0; tunnels lead to valves IV, OF
Valve FO has flow rate=0; tunnels lead to valves XQ, UE
Valve AA has flow rate=0; tunnels lead to valves NC, VY, BH, TQ, YJ
Valve ZZ has flow rate=0; tunnels lead to valves SE, TL
Valve XQ has flow rate=0; tunnels lead to valves IV, FO
Valve WI has flow rate=0; tunnels lead to valves UE, VO
Valve VY has flow rate=0; tunnels lead to valves AA, LG
Valve XK has flow rate=15; tunnels lead to valves VF, OM, ZD
Valve CX has flow rate=0; tunnels lead to valves AQ, MB
Valve JQ has flow rate=0; tunnels lead to valves XE, IV
Valve LG has flow rate=3; tunnels lead to valves VY, PS, ZR, AW, OI
Valve JB has flow rate=0; tunnels lead to valves ZE, OW
Valve OI has flow rate=0; tunnels lead to valves ZE, LG
Valve YJ has flow rate=0; tunnels lead to valves ZM, AA
Valve NC has flow rate=0; tunnels lead to valves AA, ZE
Valve KR has flow rate=0; tunnels lead to valves SB, MJ
Valve MB has flow rate=17; tunnels lead to valves CX, BH, AI, OW, MA
Valve AI has flow rate=0; tunnels lead to valves ZR, MB
Valve TL has flow rate=16; tunnels lead to valves ZZ, XB, AW
Valve RL has flow rate=0; tunnels lead to valves WV, HK
Valve CS has flow rate=0; tunnels lead to valves VF, QB
Valve WV has flow rate=25; tunnels lead to valves RL, VL, VR
Valve ZD has flow rate=0; tunnels lead to valves XK, DC
Valve IV has flow rate=23; tunnels lead to valves XQ, IR, JQ, QN
Valve PS has flow rate=0; tunnels lead to valves VR, LG
Valve RZ has flow rate=0; tunnels lead to valves DC, UE
Valve VO has flow rate=0; tunnels lead to valves WI, QB
Valve MJ has flow rate=0; tunnels lead to valves DC, KR
Valve IM has flow rate=0; tunnels lead to valves OM, OF
Valve VL has flow rate=0; tunnels lead to valves CD, WV
Valve SB has flow rate=18; tunnels lead to valves BG, KR
Valve HO has flow rate=0; tunnels lead to valves JE, UE`;

input = input.split("\n").map((line) => {
  let name = line.slice(6, 8);
  let flow = parseInt(line.slice(23, line.indexOf(";")));
  let next = line
    .slice(line.indexOf("valve") + 6)
    .trim()
    .split(", ");
  return { name, flow, next };
});

const n = input.length;

for (let i = 0; i < n; i++) input[i].idx = i;

let nameToIdx = {};
for (let i = 0; i < n; i++) nameToIdx[input[i].name] = i;

for (const valve of input)
  for (let i = 0; i < valve.next.length; i++)
    valve.next[i] = nameToIdx[valve.next[i]];

let valvesWithFlow = [];
for (const valve of input) if (valve.flow) valvesWithFlow.push(valve);

let dist = [];
for (let i = 0; i < n; i++) dist.push(Array(n).fill(Infinity));

function distance(start, curr = start, path = new Set([start])) {
  dist[start][curr] = Math.min(dist[start][curr], path.size - 1);
  for (const next of input[curr].next) {
    if (path.has(next)) continue;
    path.add(next);
    distance(start, next, path);
    path.delete(next);
  }
}

for (let i = 0; i < n; i++) distance(i);

function maxReleased(
  valvesWithFlow,
  idx = nameToIdx["AA"],
  time = 0,
  path = new Set()
) {
  if (time >= 26) return 0;
  let max = 0;
  for (const next of valvesWithFlow) {
    if (path.has(next)) continue;
    path.add(next);
    let nextTime = time + dist[idx][next.idx] + 1;
    max = Math.max(
      max,
      input[next.idx].flow * (26 - nextTime) +
        maxReleased(valvesWithFlow, next.idx, nextTime, path)
    );
    path.delete(next);
  }
  return max;
}

let output = 0;
let count = 32768;
function partitionValvesWithFlow(
  idx = 0,
  arr = [],
  set = new Set(valvesWithFlow)
) {
  count--;
  console.log(count);
  output = Math.max(output, maxReleased(arr) + maxReleased(set));
  for (let i = idx; i < valvesWithFlow.length; i++) {
    arr.push(valvesWithFlow[i]);
    set.delete(valvesWithFlow[i]);
    partitionValvesWithFlow(i + 1, arr, set);
    arr.pop();
    set.add(valvesWithFlow[i]);
  }
}

partitionValvesWithFlow();
console.log(output);
