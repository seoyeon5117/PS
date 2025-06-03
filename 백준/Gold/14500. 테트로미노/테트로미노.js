const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input.slice(1).map((line) => line.split(" ").map(Number));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let max = 0;

  function dfs(x, y, sum, depth) {
    if (depth === 3) {
      max = Math.max(max, sum);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const currentX = x + dx[i];
      const currentY = y + dy[i];
      if (
        currentX >= 0 &&
        currentX < N &&
        currentY >= 0 &&
        currentY < M &&
        !visited[currentX][currentY]
      ) {
        visited[currentX][currentY] = true;
        dfs(currentX, currentY, sum + nums[currentX][currentY], depth + 1);
        visited[currentX][currentY] = false; // 백트래킹
      }
    }
  }

  function other(x, y) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const number = [];
    let sum = nums[x][y];
    for (let i = 0; i < 4; i++) {
      const currentX = x + dx[i];
      const currentY = y + dy[i];
      if (currentX >= 0 && currentX < N && currentY >= 0 && currentY < M) {
        let temp = nums[currentX][currentY];
        number.push(temp);
        sum += temp;
      }
    }

    let count = number.length;
    if (count >= 3) {
      if (count > 3) {
        sum -= Math.min(...number);
      }
      max = Math.max(sum, max);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = true;
      dfs(i, j, nums[i][j], 0);
      visited[i][j] = false;

      other(i, j);
    }
  }

  console.log(max);
});
