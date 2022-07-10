// reference: https://i.imgur.com/6dvfGVY.jpg
// from: http://htwins.net/minesweeper/ made by carykh
const normal = [
  [-1, 1],
  [0, 1],
  [1, 1],

  [-1, 0],
  //[0,0],
  [1, 0],

  [-1, -1],
  [0, -1],
  [1, -1],
];
const knight = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];
const swath = [
  [-2, -2],
  [-1, -2],
  [0, -2],
  [1, -2],
  [2, -2],

  [-2, -1],
  [-1, -1],
  [0, -1],
  [1, -1],
  [2, -1],

  [-2, 0],
  [-1, 0],
  //[0,0],
  [1, 0],
  [2, 0],

  [-2, 1],
  [-1, 1],
  [0, 1],
  [1, 1],
  [2, 1],

  [-2, 2],
  [-1, 2],
  [0, 2],
  [1, 2],
  [2, 2],
];
const orth = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const farOrth = [
  [1, 0],
  [2, 0],
  [0, 1],
  [0, 2],
  [0, -1],
  [0, -2],
  [-1, 0],
  [-2, 0],
];
const noUp = [
  [-1, 1],
  //[0,1],
  [1, 1],

  [-1, 0],
  //[0,0],
  [1, 0],

  [-1, -1],
  [0, -1],
  [1, -1],
];
const noVert = [
  [-1, 1],
  //[0,1],
  [1, 1],

  [-1, 0],
  //[0,0],
  [1, 0],

  [-1, -1],
  //[0,-1],
  [1, -1],
];
const hexagon = [
  [1, 1],
  [-1, 0],
  [1, 0],
  [0, -1],
  [-1, -1],
  [0, 1],
];
const diagHex = [
  [1, 1],
  [-1, 0],
  [1, 0],
  [0, -1],
  [-1, -1],
  [0, 1],

  [1, 2],
  [2, 1],
  [1, -1],
  [-1, -2],
  [-2, -1],
  [-1, 1],
];
const horiz = [
  [-2, 0],
  [-1, 0],
  //[0,0],
  [1, 0],
  [2, 0],
];
// warning: the following are double, and might not work
const double = [
  [-1, -1],
  [0, -1],
  [0, -1],
  [1, -1],

  [-1, 0],
  [-1, 0],
  //[0,0],
  [1, 0],
  [1, 0],

  [-1, -1],
  [0, -1],
  [0, -1],
  [1, -1],
];
const taxiCab = [
  [0, 2],

  [-1, 1],
  [0, 1],
  [0, 1],
  [1, 1],

  [-2, 0],
  [-1, 0],
  [-1, 0],
  //[0,0],
  [1, 0],
  [1, 0],
  [2, 0],

  [-1, -1],
  [0, -1],
  [0, -1],
  [1, -1],

  [0, -2],
];
const doubHex = [
  [1, 1],
  [-1, 0],
  [1, 0],
  [0, -1],
  [-1, -1],
  [0, 1],

  [1, 2],
  [2, 1],
  [1, -1],
  [-1, -2],
  [-2, -1],
  [-1, 1],
];
const pawn = [
  [0, 2],
  [-1, 1],
  [-1, 1],
  [0, 1],
  [0, 1],
  [1, 1],
  [1, 1],
];

export {
  normal,
  knight,
  swath,
  orth,
  farOrth,
  noUp,
  noVert,
  hexagon,
  diagHex,
  horiz,
  // dont export doubles, as they are unstable
};
