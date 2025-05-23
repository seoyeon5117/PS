const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 0 <= 높이 <= 256 확인, 인벤토리에서 꺼낼 수 없으면 어쩔 수 없이 마이너스
rl.on("close", () => {
  const [N, M, B] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((line) => line.split(" ").map(Number));

  let minHeight = Infinity;
  let maxHeight = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] > maxHeight) {
        maxHeight = arr[i][j];
      }
      if (arr[i][j] < minHeight) {
        minHeight = arr[i][j];
      }
    }
  }

  let minTime = Infinity;
  let height = minHeight;
  let tempHeight = minHeight;
  let flag = false;
  while (tempHeight <= maxHeight) {
    let tempTime = 0;
    let blocksLeft = B;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const blocksToAdd = tempHeight - arr[i][j];
        if (blocksToAdd >= 0) {
          // 더하거나 아무것도 할 필요 없는 경우
          tempTime += blocksToAdd * 1;
          blocksLeft -= blocksToAdd;
        } else {
          // 빼야하는 경우
          tempTime -= blocksToAdd * 2;
          blocksLeft -= blocksToAdd * 1;
        }
      }
    }
    if (blocksLeft >= 0 && tempTime <= minTime) {
      minTime = tempTime;
      height = tempHeight;
    }

    tempHeight++;
  }

  console.log(minTime + " " + height);
});
