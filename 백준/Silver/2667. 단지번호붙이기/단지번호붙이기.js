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
  const N = +input[0];
  const map = input.slice(1).map((line) => line.split("").map(Number));
  // const graph = Array.from({ length: N }, () => []);
  // const graph = new Array(N).fill(0);
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function bfs(a, b) {
    let queue = [];
    queue.push([a, b]);
    let length = 1;
    visited[a][b] = true;
    while (queue.length !== 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const currentX = x + dx[i];
        const currentY = y + dy[i];
        if (
          currentX >= 0 &&
          currentX < N &&
          currentY >= 0 &&
          currentY < N &&
          visited[currentX][currentY] === false
        ) {
          if (map[currentX][currentY] === 1) {
            queue.push([currentX, currentY]);
            length++;
          }
          visited[currentX][currentY] = true;
        }
      }
    }
    return length;
  }

  let count = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === false && map[i][j] === 1) {
        const size = bfs(i, j); // length
        if (size !== 0) count.push(size);
      }
    }
  }

  count.sort((a, b) => a - b);
  console.log(count.length + "\n" + count.join("\n"));
});
