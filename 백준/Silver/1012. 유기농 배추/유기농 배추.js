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
  const T = +input[0];
  const result = [];

  let idx = 1;
  for (let t = 0; t < T; t++) {
    const [N, M, K] = input[idx].split(" ").map(Number);
    const map = Array.from({ length: N }, () => new Array(M).fill(0));
    for (let k = 1; k <= K; k++) {
      const [x, y] = input[idx + k].split(" ").map(Number);
      map[x][y] = 1;
    }
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    function dfs(x, y) {
      for (let i = 0; i < 4; i++) {
        const currentX = x + dx[i];
        const currentY = y + dy[i];
        if (
          currentX >= 0 &&
          currentX < N &&
          currentY >= 0 &&
          currentY < M &&
          !visited[currentX][currentY] &&
          map[currentX][currentY] === 1
        ) {
          visited[currentX][currentY] = true;
          dfs(currentX, currentY);
        }
      }
    }

    let count = 0;
    for (let n = 0; n < N; n++) {
      for (let m = 0; m < M; m++) {
        if (map[n][m] === 1 && !visited[n][m]) {
          dfs(n, m);
          count++;
        }
      }
    }
    result.push(count);
    idx += K + 1;
  }
  console.log(result.join("\n"));
});
