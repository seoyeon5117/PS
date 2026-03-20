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
  const offsets = [0, 0, 0, 0];

  for (let i = 0; i < K; i++) {
    const directions = [0, 0, 0, 0];
    const [num, direction] = input[i + 5].split(" ").map(Number);
    // num: 0 -> N극, 1 -> S극
    // direction: 1 -> 시계, -1 -> 반시계
    const idx = num - 1;
    directions[idx] = direction;

    for (let j = idx; j < 3; j++) {
      if (
        wheel[j][(offsets[j] + 2) % 8] !==
        wheel[j + 1][(offsets[j + 1] + 6) % 8]
      ) {
        directions[j + 1] = -directions[j];
      } else break;
    }

    for (let j = idx; j > 0; j--) {
      if (
        wheel[j][(offsets[j] + 6) % 8] !==
        wheel[j - 1][(offsets[j - 1] + 2) % 8]
      ) {
        directions[j - 1] = -directions[j];
      } else break;
    }

    for (let j = 0; j < 4; j++) {
      offsets[j] = (offsets[j] - directions[j] + 8) % 8;
    }
  }

  let score = 0;
  for (let j = 0; j < 4; j++) {
    if (wheel[j][offsets[j]] === 1) {
      score += 2 ** j;
    }
  }

  console.log(score);
});
