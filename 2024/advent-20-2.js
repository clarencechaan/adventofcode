let input = `#############################################################################################################################################
#.............###.....#...#.........#...............#...#.......#...###.....#.....#...###...#...###.......###.....#.........................#
#.###########.###.###.#.#.#.#######.#.#############.#.#.#.#####.#.#.###.###.#.###.#.#.###.#.#.#.###.#####.###.###.#.#######################.#
#.......#...#...#...#...#.#.......#.#.......#.....#...#...#.....#.#...#...#.#...#.#.#.#...#...#...#.#.....#...#...#...#...#.............#...#
#######.#.#.###.###.#####.#######.#.#######.#.###.#########.#####.###.###.#.###.#.#.#.#.#########.#.#.#####.###.#####.#.#.#.###########.#.###
#...###...#...#.###.....#.........#.###...#...#...#.......#.#...#...#.#...#.....#...#.#.........#...#...###...#.....#.#.#...#...#...###.#...#
#.#.#########.#.#######.###########.###.#.#####.###.#####.#.#.#.###.#.#.#############.#########.#######.#####.#####.#.#.#####.#.#.#.###.###.#
#.#...###...#.#.......#...........#.#...#.....#...#.#...#...#.#...#.#.#.............#.#.....###.#.......#...#.#.....#.#.......#...#...#.....#
#.###.###.#.#.#######.###########.#.#.#######.###.#.#.#.#####.###.#.#.#############.#.#.###.###.#.#######.#.#.#.#####.###############.#######
#...#.....#.#.....#...#...........#.#...#...#...#.#...#...#...#...#.#.#...###.....#.#.#...#...#.#...#...#.#.#.#.#...#.#.....#...#...#.......#
###.#######.#####.#.###.###########.###.#.#.###.#.#######.#.###.###.#.#.#.###.###.#.#.###.###.#.###.#.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#######.#
###...#...#.....#.#.###...........#.###...#...#.#.#.......#...#.###.#.#.#...#.#...#.#.....#...#.#...#.#.#.#.#.#...#...#...#...#...#.........#
#####.#.#.#####.#.#.#############.#.#########.#.#.#.#########.#.###.#.#.###.#.#.###.#######.###.#.###.#.#.#.#.###########.###################
#...#...#...#...#.#.#...#.....#...#.#.........#...#.###.....#.#.#...#.#.#...#.#...#.......#.....#.....#...#...#...#.....#.........#.....#...#
#.#.#######.#.###.#.#.#.#.###.#.###.#.#############.###.###.#.#.#.###.#.#.###.###.#######.#####################.#.#.###.#########.#.###.#.#.#
#.#.#...#...#.....#.#.#.#...#.#...#.#.........#...#...#...#.#.#.#...#...#...#...#.###...#...#.............#...#.#.#...#.#.........#.#...#.#.#
#.#.#.#.#.#########.#.#.###.#.###.#.#########.#.#.###.###.#.#.#.###.#######.###.#.###.#.###.#.###########.#.#.#.#.###.#.#.#########.#.###.#.#
#.#...#.#...#.....#...#.....#.....#.#...#...#...#...#.#...#.#.#.#...#.......#...#...#.#.#...#.#...###...#...#.#.#.#...#...###...#...#...#.#.#
#.#####.###.#.###.#################.#.#.#.#.#######.#.#.###.#.#.#.###.#######.#####.#.#.#.###.#.#.###.#.#####.#.#.#.#########.#.#.#####.#.#.#
#.....#.###...###...#.............#...#.#.#.....###.#.#.#...#.#.#.#...###...#...#...#.#.#...#...#...#.#.....#.#.#...#####...#.#.#.#...#.#.#.#
#####.#.###########.#.###########.#####.#.#####.###.#.#.#.###.#.#.#.#####.#.###.#.###.#.###.#######.#.#####.#.#.#########.#.#.#.#.#.#.#.#.#.#
#...#.#.#.........#...#.........#.#...#.#.#.....#...#...#...#.#.#.#...#...#.#...#...#.#...#.#.......#.#.....#...#.....#...#.#.#.#.#.#...#.#.#
#.#.#.#.#.#######.#####.#######.#.#.#.#.#.#.#####.#########.#.#.#.###.#.###.#.#####.#.###.#.#.#######.#.#########.###.#.###.#.#.#.#.#####.#.#
#.#...#.#.......#.#...#.......#.#...#.#...#...#...#...#.....#.#.#...#.#...#...#.....#.#...#.#.#.....#.#.#...#...#...#.#...#...#.#.#...###.#.#
#.#####.#######.#.#.#.#######.#.#####.#######.#.###.#.#.#####.#.###.#.###.#####.#####.#.###.#.#.###.#.#.#.#.#.#.###.#.###.#####.#.###.###.#.#
#.....#.###.....#...#.#...#...#.#...#.....#...#.#...#...#...#.#.#...#.#...#.....#...#.#.....#.#...#.#.#.#.#.#.#.#...#.....#.....#...#.....#.#
#####.#.###.#########.#.#.#.###.#.#.#####.#.###.#.#######.#.#.#.#.###.#.###.#####.#.#.#######.###.#.#.#.#.#.#.#.#.#########.#######.#######.#
#.....#.#...#.......#.#.#...#...#.#.#.....#...#.#.#...#...#...#.#.#...#...#.....#.#.#.......#.....#...#.#.#.#.#.#.#.........###...#.#.......#
#.#####.#.###.#####.#.#.#####.###.#.#.#######.#.#.#.#.#.#######.#.#.#####.#####.#.#.#######.###########.#.#.#.#.#.#.###########.#.#.#.#######
#.....#.#.....#.....#...#...#.###.#.#.....#...#.#.#.#.#.......#.#.#.#...#...#...#.#.###...#...#.........#.#.#.#.#.#.#...###...#.#.#.#.......#
#####.#.#######.#########.#.#.###.#.#####.#.###.#.#.#.#######.#.#.#.#.#.###.#.###.#.###.#.###.#.#########.#.#.#.#.#.#.#.###.#.#.#.#.#######.#
#.....#.........#.....#...#.#...#.#.....#.#.....#...#.#...#...#.#.#.#.#...#.#...#.#...#.#.#...#...#...###.#...#...#...#...#.#.#.#...#.......#
#.###############.###.#.###.###.#.#####.#.###########.#.#.#.###.#.#.#.###.#.###.#.###.#.#.#.#####.#.#.###.###############.#.#.#.#####.#######
#.#.....#.........###...###.#...#.....#.#.........#...#.#.#...#.#.#.#.#...#.#...#.#...#.#.#...#...#.#.#...#...#...#...#...#.#...#...#.......#
#.#.###.#.#################.#.#######.#.#########.#.###.#.###.#.#.#.#.#.###.#.###.#.###.#.###.#.###.#.#.###.#.#.#.#.#.#.###.#####.#.#######.#
#...#...#.###...#...#.......#.#...#...#.#...#.....#.#...#.#...#.#.#...#...#.#...#.#.#...#.#...#.#...#.#.#...#...#...#...#...#.....#...#...#.#
#####.###.###.#.#.#.#.#######.#.#.#.###.#.#.#.#####.#.###.#.###.#.#######.#.###.#.#.#.###.#.###.#.###.#.#.###############.###.#######.#.#.#.#
#...#.....#...#...#...#.....#.#.#.#...#.#.#.#.....#.#.#...#.#...#...#####.#.#...#.#.#.#...#.#...#.###.#.#.#...#...#...###...#.......#.#.#.#.#
#.#.#######.###########.###.#.#.#.###.#.#.#.#####.#.#.#.###.#.#####.#####.#.#.###.#.#.#.###.#.###.###.#.#.#.#.#.#.#.#.#####.#######.#.#.#.#.#
#.#.......#...#...#...#.#...#...#.....#...#...#...#...#...#.#.....#...#...#.#...#.#...#...#.#...#...#...#...#...#...#...###.#...#...#...#...#
#.#######.###.#.#.#.#.#.#.###################.#.#########.#.#####.###.#.###.###.#.#######.#.###.###.###################.###.#.#.#.###########
#...#...#.....#.#.#.#...#...#...#...........#.#.#...#.....#.....#...#.#...#.###.#.......#...###...#...#.................#...#.#.#.#...#...###
###.#.#.#######.#.#.#######.#.#.#.#########.#.#.#.#.#.#########.###.#.###.#.###.#######.#########.###.#.#################.###.#.#.#.#.#.#.###
###...#...#.....#...#.....#...#...#.........#.#...#.#...........#...#...#.#...#.#...#...#.........#...#...#...#...#...#...#...#.#...#.#.#...#
#########.#.#########.###.#########.#########.#####.#############.#####.#.###.#.#.#.#.###.#########.#####.#.#.#.#.#.#.#.###.###.#####.#.###.#
#...#...#...###.....#...#.#...#.....#.....###.......#.......###...#...#.#.#...#.#.#.#.###.....#...#.#...#...#...#...#...#...###.......#...#.#
#.#.#.#.#######.###.###.#.#.#.#.#####.###.###########.#####.###.###.#.#.#.#.###.#.#.#.#######.#.#.#.#.#.#################.###############.#.#
#.#...#...#...#.#...#...#...#...#...#.#...#...#...###.....#.....#...#.#.#...###.#.#.#.#.......#.#...#.#.#...#...#...#.....#...###...###...#.#
#.#######.#.#.#.#.###.###########.#.#.#.###.#.#.#.#######.#######.###.#.#######.#.#.#.#.#######.#####.#.#.#.#.#.#.#.#.#####.#.###.#.###.###.#
#.......#.#.#.#.#...#.......#.....#...#.....#...#.....###.....#...###.#.......#.#.#...#...#...#.#.....#.#.#.#.#...#.#.......#.....#.....#...#
#######.#.#.#.#.###.#######.#.#######################.#######.#.#####.#######.#.#.#######.#.#.#.#.#####.#.#.#.#####.#####################.###
###...#.#.#.#.#...#.#.......#.#...#.....#...#...#...#.#.......#.....#.#.....#.#...#...#...#.#.#.#.#...#...#.#...###.................#.....###
###.#.#.#.#.#.###.#.#.#######.#.#.#.###.#.#.#.#.#.#.#.#.###########.#.#.###.#.#####.#.#.###.#.#.#.#.#.#####.###.###################.#.#######
#...#...#...#...#.#.#.........#.#.#...#.#.#.#.#.#.#.#.#...#...#...#.#...###...#.....#.#...#.#...#...#.....#...#.#...#.......#.....#.#.......#
#.#############.#.#.###########.#.###.#.#.#.#.#.#.#.#.###.#.#.#.#.#.###########.#####.###.#.#############.###.#.#.#.#.#####.#.###.#.#######.#
#.............#...#...#.....#...#.....#...#...#...#...#...#.#...#.#.........###.....#...#...#...#...#...#...#...#.#.#.#.....#.#...#.....#...#
#############.#######.#.###.#.#########################.###.#####.#########.#######.###.#####.#.#.#.#.#.###.#####.#.#.#.#####.#.#######.#.###
#...........#.......#.#...#...#.........#.............#.....###...#...#...#.#.......#...###...#...#...#.....#...#.#.#.#.......#.......#.#...#
#.#########.#######.#.###.#####.#######.#.###########.#########.###.#.#.#.#.#.#######.#####.#################.#.#.#.#.###############.#.###.#
#...#.....#.........#.....#...#.#.......#.#.....#.....#.........#...#.#.#...#...#...#.......#.................#...#...#...#...#.....#.#.....#
###.#.###.#################.#.#.#.#######.#.###.#.#####.#########.###.#.#######.#.#.#########.#########################.#.#.#.#.###.#.#######
###...###...#.....#...#...#.#.#.#.......#.#...#.#.....#.#.....#...#...#.#...#...#.#...#.....#.#.......#.........#...#...#...#.#...#...#.....#
###########.#.###.#.#.#.#.#.#.#.#######.#.###.#.#####.#.#.###.#.###.###.#.#.#.###.###.#.###.#.#.#####.#.#######.#.#.#.#######.###.#####.###.#
#...........#.#...#.#.#.#...#...###.....#.#...#.......#...###.#.###...#...#.#.....###.#.###...#.....#.#.....###...#...#...###.#...#...#.#...#
#.###########.#.###.#.#.###########.#####.#.#################.#.#####.#####.#########.#.###########.#.#####.###########.#.###.#.###.#.#.#.###
#...#...#...#.#...#.#.#.#...........#.....#.............#.....#.#...#.....#.###.......#.#.......#...#.......#.......###.#...#.#...#.#...#...#
###.#.#.#.#.#.###.#.#.#.#.###########.#################.#.#####.#.#.#####.#.###.#######.#.#####.#.###########.#####.###.###.#.###.#.#######.#
###...#...#...###...#...#.#...........#.................#.....#...#.....#.#.#...#...#...#.....#.#.............#...#...#...#.#.....#.#.......#
#########################.#.###########.#####################.#########.#.#.#.###.#.#.#######.#.###############.#.###.###.#.#######.#.#######
###...###.........#.....#...#...........#...#...#...#.......#...#...#...#...#.....#...#...#...#.........#.......#...#.....#.........#.......#
###.#.###.#######.#.###.#####.###########.#.#.#.#.#.#.#####.###.#.#.#.#################.#.#.###########.#.#########.#######################.#
#...#...#.......#.#.#...#...#.............#...#...#.#.#.....#...#.#.#.....#...###.......#...#.........#.#.....#...#.......#...#...........#.#
#.#####.#######.#.#.#.###.#.#######################.#.#.#####.###.#.#####.#.#.###.###########.#######.#.#####.#.#.#######.#.#.#.#########.#.#
#.....#.#...#...#...#.....#.................#.......#.#.....#.....#.......#.#.#...#.........#.###.....#.......#.#.....###...#...#...#...#...#
#####.#.#.#.#.#############################.#.#######.#####.###############.#.#.###.#######.#.###.#############.#####.###########.#.#.#.#####
#...#.#.#.#...#.......#...................#.#.###.....#.....#...###.....#...#.#.....###...#...#...#.............#...#.............#...#.....#
#.#.#.#.#.#####.#####.#.#################.#.#.###.#####.#####.#.###.###.#.###.#########.#.#####.###.#############.#.#######################.#
#.#.#.#.#.......#...#...#...#...........#.#.#.....#...#.#.....#.....#...#...#.....###...#.#...#.....#...#...#.....#...#...#...#...#.....#...#
#.#.#.#.#########.#.#####.#.#.#########.#.#.#######.#.#.#.###########.#####.#####.###.###.#.#.#######.#.#.#.#.#######.#.#.#.#.#.#.#.###.#.###
#.#.#.#.#.....#...#.###...#...#.......#.#.#.#.......#.#.#.........#...#...#.....#...#...#.#.#.........#...#...#.....#.#.#.#.#.#.#...###...###
#.#.#.#.#.###.#.###.###.#######.#####.#.#.#.#.#######.#.#########.#.###.#.#####.###.###.#.#.###################.###.#.#.#.#.#.#.#############
#.#.#.#.#...#.#.#...#...#...#...###...#...#.#.......#...#...#...#.#.....#...###...#.#...#.#...#...#...#.......#...#.#...#...#.#.........#...#
#.#.#.#.###.#.#.#.###.###.#.#.#####.#######.#######.#####.#.#.#.#.#########.#####.#.#.###.###.#.#.#.#.#.#####.###.#.#########.#########.#.#.#
#.#...#...#.#.#.#.#...#...#.#.#.....###...#.....#...#...#.#.#.#.#.......#...#...#.#...#...###...#...#.#.#.....#...#.........#.#.......#.#.#.#
#.#######.#.#.#.#.#.###.###.#.#.#######.#.#####.#.###.#.#.#.#.#.#######.#.###.#.#.#####.#############.#.#.#####.###########.#.#.#####.#.#.#.#
#...#...#...#...#...#...###.#.#.#.......#.....#.#.#...#.#.#.#.#.#...#...#.....#...#.....###...........#.#.......#...#.......#...#...#.#...#.#
###.#.#.#############.#####.#.#.#.###########.#.#.#.###.#.#.#.#.#.#.#.#############.#######.###########.#########.#.#.###########.#.#.#####.#
#...#.#.#.....#...#...#...#...#...#...#.......#...#.#...#.#.#.#.#.#.#.....#.......#.#.....#.#...........#.........#...#...#...###.#.#...#...#
#.###.#.#.###.#.#.#.###.#.#########.#.#.###########.#.###.#.#.#.#.#.#####.#.#####.#.#.###.#.#.###########.#############.#.#.#.###.#.###.#.###
#.....#.#...#.#.#.#.###.#...#...#...#...#.......###.#.#...#...#.#.#.....#...#...#.#.#.#...#...###...###...#.......#...#.#...#.....#...#...###
#######.###.#.#.#.#.###.###.#.#.#.#######.#####.###.#.#.#######.#.#####.#####.#.#.#.#.#.#########.#.###.###.#####.#.#.#.#############.#######
#.......#...#.#.#...#...#...#.#.#...#...#.#...#...#.#.#.......#.#.#.....#...#.#.#.#.#.#.....###...#...#.....#...#...#...#...#.........#...###
#.#######.###.#.#####.###.###.#.###.#.#.#.#.#.###.#.#.#######.#.#.#.#####.#.#.#.#.#.#.#####.###.#####.#######.#.#########.#.#.#########.#.###
#.....#...#...#.....#...#.....#.....#.#.#...#.#...#.#.#.....#.#.#.#...#...#...#.#.#...#.....#...#...#.###.....#...........#.#...........#...#
#####.#.###.#######.###.#############.#.#####.#.###.#.#.###.#.#.#.###.#.#######.#.#####.#####.###.#.#.###.#################.###############.#
###...#...#...#.....###...#...........#...###.#.###.#.#...#.#.#...#...#.....#...#...#...#...#...#.#...#...#...#...........#.#.........#.....#
###.#####.###.#.#########.#.#############.###.#.###.#.###.#.#.#####.#######.#.#####.#.###.#.###.#.#####.###.#.#.#########.#.#.#######.#.#####
#...#.....###.#.#.........#.#...........#.#...#.....#...#.#.#.....#.#...#...#.......#.#...#...#.#.....#.....#.#.#.........#...#...###.#.....#
#.###.#######.#.#.#########.#.#########.#.#.###########.#.#.#####.#.#.#.#.###########.#.#####.#.#####.#######.#.#.#############.#.###.#####.#
#...#.......#.#.#.#.......#.#...#...###...#...#.........#.#.#...#.#.#.#.#...#.........#.....#.#...#...###...#...#...#...###...#.#.#...#...#.#
###.#######.#.#.#.#.#####.#.###.#.#.#########.#.#########.#.#.#.#.#.#.#.###.#.#############.#.###.#.#####.#.#######.#.#.###.#.#.#.#.###.#.#.#
#...#...#...#.#.#...#.....#...#...#.#...#...#.#.#...#...#.#.#.#...#.#.#...#.#.....#########.#.#...#...#...#...#...#...#...#.#.#.#.#.....#...#
#.###.#.#.###.#.#####.#######.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#####.#.###.#.#####.#########.#.#.#####.#.#####.#.#.#######.#.#.#.#.###########
#.....#.#...#...###...#.....#.#.....#.#.#.#.#.#.#.#.#.#.#.#.#.#.....#...#.#.....#.#########.#.#...#...#.....#...#.#.....#...#...#.###.......#
#######.###.#######.###.###.#.#.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#######.#.#####.#.#########.#.###.#.#######.#####.#.###.#########.###.#####.#
###...#.....#...#...#...#...#.#.....#.#.#.#.#.#.#.#.#.#.#.#.#.#.#...#...#.#.....#.#########.#.#...#...#...#.....#...###.........#...#.#.....#
###.#.#######.#.#.###.###.###.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.###.#.#####.#########.#.#.#####.#.#.#####.###############.###.#.#.#####
#...#.........#.#.....###.....#.....#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.###.#...#...#########.#.#.....#.#.#.......#...........###...#...#.#...#
#.#############.###############.#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.###.###.#.###########.#.#####.#.#.#########.#########.#####.#####.#.#.#
#.#...#...#...#.........###...#.....#.#.#.#.#.#...#.#.#.#.#.#.#.#.#.#...#...#.#.###########.#...#...#.#...........#.....#...#...#.....#...#.#
#.#.#.#.#.#.#.#########.###.#.#####.#.#.#.#.#.#####.#.#.#.#.#.#.#.#.###.###.#.#.###########.###.#.###.#############.###.#.###.#.#####.#####.#
#.#.#.#.#...#...#.....#.....#.......#.#.#.#.#.....#.#.#.#.#.#.#.#.#...#...#.#.#.#########...#...#...#.#...#.......#...#...#...#...#...#...#.#
#.#.#.#.#######.#.###.###############.#.#.#.#####.#.#.#.#.#.#.#.#.###.###.#.#.#.#########.###.#####.#.#.#.#.#####.###.#####.#####.#.###.#.#.#
#.#.#...###.....#.###...#...#...#...#.#.#.#...#...#.#.#...#.#.#.#.#...#...#.#.#.#########.#...#...#.#.#.#.#.....#...#.......#.....#.....#.#.#
#.#.#######.#####.#####.#.#.#.#.#.#.#.#.#.###.#.###.#.#####.#.#.#.#.###.###.#.#.#########.#.###.#.#.#.#.#.#####.###.#########.###########.#.#
#.#.#.......#.....#...#...#...#.#.#.#.#.#.#...#...#...#.....#.#.#.#...#...#...#...#######.#.....#.#.#.#.#.#...#.#...#.......#.......#...#...#
#.#.#.#######.#####.#.#########.#.#.#.#.#.#.#####.#####.#####.#.#.###.###.#######.#######.#######.#.#.#.#.#.#.#.#.###.#####.#######.#.#.#####
#...#...#...#.#.....#.#.........#.#.#.#.#.#.....#.....#.....#.#...#...#...#.......#######.#.......#.#.#.#...#.#.#...#.....#.#.....#...#.....#
#######.#.#.#.#.#####.#.#########.#.#.#.#.#####.#####.#####.#.#####.###.###.#############.#.#######.#.#.#####.#.###.#####.#.#.###.#########.#
###...#...#...#.....#.#.........#.#...#.#.#.....#.....#.....#...###.....#...#..E#########.#.#.....#.#.#.....#...###.#...#.#.#...#...........#
###.#.#############.#.#########.#.#####.#.#.#####.#####.#######.#########.###.###########.#.#.###.#.#.#####.#######.#.#.#.#.###.#############
#...#...#.........#.#...........#...###.#.#.....#.....#...#...#.........#...#...#########.#.#.#...#.#.#.....###.....#.#...#...#.............#
#.#####.#.#######.#.###############.###.#.#####.#####.###.#.#.#########.###.###.#########.#.#.#.###.#.#.#######.#####.#######.#############.#
#...#...#.......#...#...#...#.....#...#...#.....#.....###.#.#...#...#...#...#...#######...#.#.#...#.#.#...#...#.#...#.......#...#...#.....#.#
###.#.#########.#####.#.#.#.#.###.###.#####.#####.#######.#.###.#.#.#.###.###.#########.###.#.###.#.#.###.#.#.#.#.#.#######.###.#.#.#.###.#.#
#...#.#.........#...#.#.#.#.#.###...#...#...#...#...#.....#...#...#.#...#...#.#########.###...#...#.#.#...#.#.#...#.#.....#.###.#.#.#...#.#.#
#.###.#.#########.#.#.#.#.#.#.#####.###.#.###.#.###.#.#######.#####.###.###.#.#########.#######.###.#.#.###.#.#####.#.###.#.###.#.#.###.#.#.#
#...#...#...#.....#.#.#...#.#.....#.#...#...#.#.#...#...#...#.....#.#...#...#.......###.......#...#.#.#.....#...#...#...#...#...#.#.#...#...#
###.#####.#.#.#####.#.#####.#####.#.#.#####.#.#.#.#####.#.#.#####.#.#.###.#########.#########.###.#.#.#########.#.#####.#####.###.#.#.#######
#...#.....#.#.#.....#.#.....#.....#.#.#...#...#.#...#...#.#.#.....#.#.###.#.....#...#######...#...#.#...#.....#.#...#...#...#.#...#.#.......#
#.###.#####.#.#.#####.#.#####.#####.#.#.#.#####.###.#.###.#.#.#####.#.###.#.###.#.#########.###.###.###.#.###.#.###.#.###.#.#.#.###.#######.#
#.#...#.....#.#...#...#.....#.....#...#.#.......#...#...#.#.#.....#.#.#...#...#.#...#######...#.#...###.#...#.#.#...#.....#.#...###...#.....#
#.#.###.#####.###.#.#######.#####.#####.#########.#####.#.#.#####.#.#.#.#####.#.###.#########.#.#.#####.###.#.#.#.#########.#########.#.#####
#.#...#...#...#...#.#.......#...#.#...#.#.....#...#...#...#...#...#...#...#...#.#...#######...#.#.....#...#.#.#.#...#.....#.....#####.#.....#
#.###.###.#.###.###.#.#######.#.#.#.#.#.#.###.#.###.#.#######.#.#########.#.###.#.#########.###.#####.###.#.#.#.###.#.###.#####.#####.#####.#
#.#...###.#...#...#.#.#...#...#.#.#.#...#.#...#.###.#.#.......#.....###...#.#...#.....###...###...#...###...#...###.#...#.#...#...#...#...#.#
#.#.#####.###.###.#.#.#.#.#.###.#.#.#####.#.###.###.#.#.###########.###.###.#.#######.###.#######.#.###############.###.#.#.#.###.#.###.#.#.#
#.#...#...#...#...#.#.#.#.#.#...#.#.#...#.#.#...#...#...#.....#...#.#...#...#.#...#...###.....#...#.#...............#...#.#.#...#.#...#.#.#.#
#.###.#.###.###.###.#.#.#.#.#.###.#.#.#.#.#.#.###.#######.###.#.#.#.#.###.###.#.#.#.#########.#.###.#.###############.###.#.###.#.###.#.#.#.#
#.....#.....###.....#...#...#.....#...#...#...###.........###...#...#.....###...#...###S......#.....#.................###...###...###...#...#
#############################################################################################################################################`;

input = input.split("\n").map((str) => str.split(""));

const n = input.length;
const m = input[0].length;

let startX;
let startY;
let endX;
let endY;

for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++)
    if (input[i][j] === "S") {
      startX = j;
      startY = i;
    } else if (input[i][j] === "E") {
      endX = j;
      endY = i;
    }

input[endY][endX] = ".";
input[startY][startX] = ".";

const lowestScoreMapFromStart = Array(n)
  .fill()
  .map(() => Array(m).fill(Infinity));

const queueFromStart = [[startX, startY, 0]];
for (const [x, y, points] of queueFromStart) {
  if (lowestScoreMapFromStart[y][x] <= points) continue;
  if (input[y][x] === "#") continue;
  lowestScoreMapFromStart[y][x] = points;

  queueFromStart.push([x + 1, y, points + 1]);
  queueFromStart.push([x, y + 1, points + 1]);
  queueFromStart.push([x - 1, y, points + 1]);
  queueFromStart.push([x, y - 1, points + 1]);
}

const lowestScoreMapToEnd = Array(n)
  .fill()
  .map(() => Array(m).fill(Infinity));

const queueToEnd = [[endX, endY, 0]];

for (const [x, y, points] of queueToEnd) {
  if (lowestScoreMapToEnd[y][x] <= points) continue;
  if (input[y][x] === "#") continue;
  lowestScoreMapToEnd[y][x] = points;

  queueToEnd.push([x - 1, y, points + 1]);
  queueToEnd.push([x, y - 1, points + 1]);
  queueToEnd.push([x + 1, y, points + 1]);
  queueToEnd.push([x, y + 1, points + 1]);
}

const scoreNoCheat = lowestScoreMapFromStart[endY][endX];

function getPossibleCheats(x, y) {
  if (input[y][x] !== ".") return [];
  const cheats = [];
  for (let cy = y - 20; cy <= y + 20; cy++)
    for (let cx = x - 20; cx <= x + 20; cx++)
      if (Math.abs(y - cy) + Math.abs(x - cx) <= 20 && input[cy]?.[cx] === ".")
        cheats.push([cx, cy]);
  return cheats;
}

function getPicosecondsSaved(x, y, cx, cy) {
  if (input[y][x] !== ".") return -Infinity;

  const scoreSoFar = lowestScoreMapFromStart[y][x];
  return (
    scoreNoCheat -
    (scoreSoFar +
      Math.abs(x - cx) +
      Math.abs(y - cy) +
      lowestScoreMapToEnd[cy][cx])
  );
}

let result = 0;
for (let y = 0; y < n; y++)
  for (let x = 0; x < m; x++) {
    const cheats = getPossibleCheats(x, y);
    for (const [cx, cy] of cheats) {
      const saved = getPicosecondsSaved(x, y, cx, cy);
      if (saved >= 100) result++;
    }
  }
console.log(result);
