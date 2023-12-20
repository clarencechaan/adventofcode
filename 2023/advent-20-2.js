let input = `%np -> vn
&lv -> rx
%rt -> ns
%th -> bc
%gt -> rt, db
%zf -> db, np
%sg -> fs, gr
%vn -> db, zj
%qh -> ms, lz
%rv -> rj, vc
%br -> lz, qh
%pc -> jq, vc
%dk -> xl
%qq -> th, gr
%ns -> xv
&vc -> gl, tv, pc, qd, tn, dg
%bd -> lz, vm
%ms -> lz, bd
%dg -> rv
%cf -> vc
%kc -> cq, db
%ds -> dk, lz
%zj -> kc
%qm -> db, zf
%gl -> qd
%hf -> db
%hx -> px, gr
%fk -> tv, vc
%tp -> ld
%gg -> rq, gr
%xl -> gj, lz
%vm -> lz
%qf -> lz, vr
%px -> qq
%fs -> tp
%bc -> cd, gr
%vr -> xz, lz
%xv -> qm, db
%rq -> gr
%cq -> hf, db
&lz -> dt, dk, qf
&gr -> tp, fs, px, st, th, sg
&st -> lv
&tn -> lv
%xz -> ds, lz
&hh -> lv
&db -> np, gt, zj, ns, hh, rt
%qd -> dg
%jq -> vc, fk
%jp -> cf, vc
%rj -> jp, vc
%tv -> kz
%cd -> gg, gr
&dt -> lv
%ld -> hx, gr
%kz -> gl, vc
broadcaster -> pc, sg, qf, gt
%gj -> lz, br`;

input = input.split("\n").map((str) => str.split(" -> "));
for (let i = 0; i < input.length; i++) {
  if (input[i][0] === "broadcaster") {
    input[i][0] = ["broadcaster", "broadcaster"];
  } else input[i][0] = [input[i][0][0], input[i][0].slice(1)];
  input[i][1] = input[i][1].split(", ");
}

let moduleMap = {};
for (const [[type, moduleName], destinations] of input) {
  moduleMap[moduleName] = { type, destinations };
  if (type === "%") moduleMap[moduleName].state = 0;
  if (type === "&") moduleMap[moduleName].recentPulse = {};
}

for (const [[, moduleName], destinations] of input)
  for (const d of destinations)
    if (moduleMap[d]?.type === "&") moduleMap[d].recentPulse[moduleName] = 0;

function sendPulse(pulse = 0, moduleName = "broadcaster", prevModuleName) {
  if (!moduleMap[moduleName]) return;
  const { type, destinations, recentPulse } = moduleMap[moduleName];
  if (type === "%" && pulse === 1) return;
  if (type === "%" && pulse === 0) {
    moduleMap[moduleName].state = (moduleMap[moduleName].state + 1) % 2;
    pulse = moduleMap[moduleName].state;
  }
  if (type === "&") {
    recentPulse[prevModuleName] = pulse;
    pulse = 0;
    for (let inputModuleName in recentPulse)
      if (recentPulse[inputModuleName] === 0) {
        pulse = 1;
        break;
      }
  }
  for (const nextModuleName of destinations)
    queue.push([pulse, nextModuleName, moduleName]);
}

let stepMap = {};
for (let i = 1; i <= 5000; i++) {
  queue = [[0, "broadcaster", null]];
  for (const [pulse, moduleName, prevModuleName] of queue)
    sendPulse(pulse, moduleName, prevModuleName);
  let str = queue.map((arr) => arr.join("")).join("");
  if (!stepMap["1lvst"] && str.includes("1lvst")) stepMap["1lvst"] = i;
  if (!stepMap["1lvtn"] && str.includes("1lvtn")) stepMap["1lvtn"] = i;
  if (!stepMap["1lvhh"] && str.includes("1lvhh")) stepMap["1lvhh"] = i;
  if (!stepMap["1lvdt"] && str.includes("1lvdt")) stepMap["1lvdt"] = i;
}

stepMap = Object.entries(stepMap).map(([, s]) => s);

let steps = stepMap[0];
let toAdd = stepMap[0];
for (let i = 1; i < stepMap.length; i++) {
  while (steps % stepMap[i] !== 0) steps += toAdd;
  toAdd = steps;
}
console.log(steps);
