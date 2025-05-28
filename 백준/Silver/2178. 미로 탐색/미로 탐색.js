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
  const map = input.slice(1).map((line) => line.split("").map(Number));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  const distance = Array.from({ length: N }, () => new Array(M).fill(1));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // bfs. 가장 먼저 도착한 곳이 최단 경로.
  let queue = [];
  queue.push([0, 0]);
  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let currentX = x + dx[i];
      let currentY = y + dy[i];
      if (
        currentX >= 0 &&
        currentX < N &&
        currentY >= 0 &&
        currentY < M &&
        map[currentX][currentY] === 1 &&
        visited[currentX][currentY] === false
      ) {
        distance[currentX][currentY] = distance[x][y] + 1;
        if (currentX === N - 1 && currentY === M - 1) {
          queue = [];
          break;
        }
        visited[currentX][currentY] = true;
        queue.push([currentX, currentY]);
      }
    }
  }
  console.log(distance[N - 1][M - 1]);
});
