let input = `Blueprint 1: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 18 clay. Each geode robot costs 4 ore and 19 obsidian.
Blueprint 2: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 4 ore and 12 obsidian.
Blueprint 3: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 12 clay. Each geode robot costs 3 ore and 8 obsidian.
Blueprint 4: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 4 ore and 13 obsidian.
Blueprint 5: Each ore robot costs 2 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 3 ore and 10 obsidian.
Blueprint 6: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 17 clay. Each geode robot costs 4 ore and 8 obsidian.
Blueprint 7: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 8: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 6 clay. Each geode robot costs 3 ore and 16 obsidian.
Blueprint 9: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 19 clay. Each geode robot costs 3 ore and 17 obsidian.
Blueprint 10: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 9 clay. Each geode robot costs 4 ore and 16 obsidian.
Blueprint 11: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 4 ore and 18 obsidian.
Blueprint 12: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 20 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 13: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 5 clay. Each geode robot costs 3 ore and 18 obsidian.
Blueprint 14: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 4 ore and 11 obsidian.
Blueprint 15: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 14 clay. Each geode robot costs 2 ore and 7 obsidian.
Blueprint 16: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 3 ore and 7 clay. Each geode robot costs 3 ore and 20 obsidian.
Blueprint 17: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 18 clay. Each geode robot costs 2 ore and 11 obsidian.
Blueprint 18: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 17 clay. Each geode robot costs 3 ore and 11 obsidian.
Blueprint 19: Each ore robot costs 2 ore. Each clay robot costs 4 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 17 obsidian.
Blueprint 20: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 7 obsidian.
Blueprint 21: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 15 clay. Each geode robot costs 4 ore and 17 obsidian.
Blueprint 22: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 15 clay. Each geode robot costs 2 ore and 13 obsidian.
Blueprint 23: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 16 clay. Each geode robot costs 3 ore and 14 obsidian.
Blueprint 24: Each ore robot costs 4 ore. Each clay robot costs 3 ore. Each obsidian robot costs 4 ore and 5 clay. Each geode robot costs 3 ore and 10 obsidian.
Blueprint 25: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 20 clay. Each geode robot costs 2 ore and 20 obsidian.
Blueprint 26: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 14 clay. Each geode robot costs 2 ore and 16 obsidian.
Blueprint 27: Each ore robot costs 3 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 10 obsidian.
Blueprint 28: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 3 ore and 8 clay. Each geode robot costs 2 ore and 12 obsidian.
Blueprint 29: Each ore robot costs 4 ore. Each clay robot costs 4 ore. Each obsidian robot costs 4 ore and 8 clay. Each geode robot costs 2 ore and 15 obsidian.
Blueprint 30: Each ore robot costs 3 ore. Each clay robot costs 3 ore. Each obsidian robot costs 2 ore and 7 clay. Each geode robot costs 2 ore and 9 obsidian.`;

input = input.split("\n").map((str) => {
  let arr = str.split(" ");
  let blueprint = [
    parseInt(arr[6]),
    parseInt(arr[12]),
    [parseInt(arr[18]), parseInt(arr[21])],
    [parseInt(arr[27]), parseInt(arr[30])],
  ];
  return blueprint;
});

function maxGeodes(
  blueprint,
  time = 1,
  oreRobot = 1,
  clayRobot = 0,
  obsidianRobot = 0,
  geodeRobot = 0,
  ore = 0,
  clay = 0,
  obsidian = 0,
  geode = 0
) {
  if (time > 24) return geode;
  let max = geode;
  // build geode robot
  if (ore >= blueprint[3][0] && obsidian >= blueprint[3][1]) {
    max = Math.max(
      max,
      maxGeodes(
        blueprint,
        time + 1,
        oreRobot,
        clayRobot,
        obsidianRobot,
        geodeRobot + 1,
        ore + oreRobot - blueprint[3][0],
        clay + clayRobot,
        obsidian + obsidianRobot - blueprint[3][1],
        geode + 24 - time
      )
    );
  } else {
    // build obsidian robot
    if (ore >= blueprint[2][0] && clay >= blueprint[2][1])
      max = Math.max(
        max,
        maxGeodes(
          blueprint,
          time + 1,
          oreRobot,
          clayRobot,
          obsidianRobot + 1,
          geodeRobot,
          ore + oreRobot - blueprint[2][0],
          clay + clayRobot - blueprint[2][1],
          obsidian + obsidianRobot,
          geode
        )
      );
    // build clay robot
    if (ore >= blueprint[1])
      max = Math.max(
        max,
        maxGeodes(
          blueprint,
          time + 1,
          oreRobot,
          clayRobot + 1,
          obsidianRobot,
          geodeRobot,
          ore + oreRobot - blueprint[1],
          clay + clayRobot,
          obsidian + obsidianRobot,
          geode
        )
      );
    // build ore robot
    if (ore >= blueprint[0])
      max = Math.max(
        max,
        maxGeodes(
          blueprint,
          time + 1,
          oreRobot + 1,
          clayRobot,
          obsidianRobot,
          geodeRobot,
          ore + oreRobot - blueprint[0],
          clay + clayRobot,
          obsidian + obsidianRobot,
          geode
        )
      );
    // don't build
    max = Math.max(
      max,
      maxGeodes(
        blueprint,
        time + 1,
        oreRobot,
        clayRobot,
        obsidianRobot,
        geodeRobot,
        ore + oreRobot,
        clay + clayRobot,
        obsidian + obsidianRobot,
        geode
      )
    );
  }

  return max;
}

let output = 0;
for (let i = 0; i < input.length; i++) {
  let geodes = maxGeodes(input[i]);
  console.log(i, geodes, input[i]);
  output += (i + 1) * geodes;
}
console.log(output);

// 1659
