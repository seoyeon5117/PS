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
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map((line) => line.split(" ").map(Number));
  const distance = Array.from({ length: n }, () => Array(m).fill(-1));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  let startRow, startCol; // 목표지점
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) {
        // 목표 지점 찾기
        startRow = i;
        startCol = j;
        distance[i][j] = 0;
        visited[i][j] = true;
      } else if (arr[i][j] === 0) {
        // 원래 못 가는 땅은 0 출력
        distance[i][j] = 0;
      }
    }
  }

  const queue = [];
  queue.push([startRow, startCol]);
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const currentX = x + dx[i];
      const currentY = y + dy[i];
      if (
        currentX >= 0 &&
        currentY >= 0 &&
        currentX < n &&
        currentY < m &&
        arr[currentX][currentY] !== 0 &&
        !visited[currentX][currentY]
      ) {
        visited[currentX][currentY] = true;
        distance[currentX][currentY] = distance[x][y] + 1;
        queue.push([currentX, currentY]);
      }
    }
  }

  console.log(distance.map((line) => line.join(" ")).join("\n"));
});
