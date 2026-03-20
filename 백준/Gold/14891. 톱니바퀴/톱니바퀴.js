const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 극이 달랐다면 반대방향으로 회전
// 극이 같았다면 회전하지 않음
rl.on("close", () => {
  const wheel = Array.from({ length: 4 }, () => []);
  for (let i = 0; i < 4; i++) {
    wheel[i] = input[i].split("").map(Number);
  }
  const K = +input[4];
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  let idx4 = 0;

  for (let i = 0; i < K; i++) {
    const [num, direction] = input[i + 5].split(" ").map(Number);
    // num: 0 -> N극, 1 -> S극
    // direction: 1 -> 시계, -1 -> 반시계

    if (num === 1) {
      if (wheel[0][(idx1 + 2) % 8] !== wheel[1][(idx2 + 6) % 8]) {
        if (wheel[1][(idx2 + 2) % 8] !== wheel[2][(idx3 + 6) % 8]) {
          if (wheel[2][(idx3 + 2) % 8] !== wheel[3][(idx4 + 6) % 8]) {
            idx4 += direction;
          }
          idx3 -= direction;
        }
        idx2 += direction;
      }
      idx1 -= direction;
    } else if (num === 2) {
      if (wheel[0][(idx1 + 2) % 8] !== wheel[1][(idx2 + 6) % 8]) {
        idx1 += direction;
      }
      if (wheel[1][(idx2 + 2) % 8] !== wheel[2][(idx3 + 6) % 8]) {
        if (wheel[2][(idx3 + 2) % 8] !== wheel[3][(idx4 + 6) % 8]) {
          idx4 -= direction;
        }
        idx3 += direction;
      }
      idx2 -= direction;
    } else if (num === 3) {
      if (wheel[1][(idx2 + 2) % 8] !== wheel[2][(idx3 + 6) % 8]) {
        if (wheel[0][(idx1 + 2) % 8] !== wheel[1][(idx2 + 6) % 8]) {
          idx1 -= direction;
        }
        idx2 += direction;
      }
      if (wheel[2][(idx3 + 2) % 8] !== wheel[3][(idx4 + 6) % 8]) {
        idx4 += direction;
      }
      idx3 -= direction;
    } else {
      if (wheel[3][(idx4 + 6) % 8] !== wheel[2][(idx3 + 2) % 8]) {
        if (wheel[2][(idx3 + 6) % 8] !== wheel[1][(idx2 + 2) % 8]) {
          if (wheel[1][(idx2 + 6) % 8] !== wheel[0][(idx1 + 2) % 8]) {
            idx1 += direction;
          }
          idx2 -= direction;
        }
        idx3 += direction;
      }
      idx4 -= direction;
    }
    idx1 = (idx1 + 8) % 8;
    idx2 = (idx2 + 8) % 8;
    idx3 = (idx3 + 8) % 8;
    idx4 = (idx4 + 8) % 8;
  }

  let score = 0;
  if (wheel[0][idx1] === 1) {
    score += 1;
  }
  if (wheel[1][idx2] === 1) {
    score += 2;
  }
  if (wheel[2][idx3] === 1) {
    score += 4;
  }
  if (wheel[3][idx4] === 1) {
    score += 8;
  }

  console.log(score);
});
