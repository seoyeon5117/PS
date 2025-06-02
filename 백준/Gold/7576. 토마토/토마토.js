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
  const [M, N] = input[0].split(" ").map(Number);
  const tomato = input.slice(1).map((line) => line.split(" ").map(Number));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomato[i][j] === 1) queue.push([i, j]);
    }
  }

  // bfs
  let index = 0;
  while (queue.length > index) {
    const [x, y] = queue[index++];
    for (let i = 0; i < 4; i++) {
      const currentX = x + dx[i];
      const currentY = y + dy[i];

      if (
        currentX >= 0 &&
        currentX < N &&
        currentY >= 0 &&
        currentY < M &&
        tomato[currentX][currentY] === 0
      ) {
        tomato[currentX][currentY] = tomato[x][y] + 1;
        queue.push([currentX, currentY]);
      }
    }
  }

  let result = -1;
  for (const t of tomato.flat()) {
    if (t > result) result = t;
    if (t === 0) {
      result = 0;
      break;
    }
  }
  console.log(result - 1);
});
