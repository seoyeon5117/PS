const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === +input[0].split(" ")[0] + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  const campus = input.slice(1).map((line) => line.split(""));
  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  let met = 0; // 만날 수 있는 사람 수

  let x, y;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === "I") {
        x = i;
        y = j;
        j = M; // break
        i = N; // break
      }
    }
  }

  visited[x][y] = true; // 도연이가 있는 위치는 이미 방문

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  queue.push([x, y]);

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const currentX = x + dx[i];
      const currentY = y + dy[i];
      if (
        currentX >= 0 &&
        currentY >= 0 &&
        currentX < N &&
        currentY < M &&
        !visited[currentX][currentY]
      ) {
        if (campus[currentX][currentY] === "P") {
          met++;
          queue.push([currentX, currentY]);
        } else if (campus[currentX][currentY] === "O") {
          queue.push([currentX, currentY]);
        }
        // X(벽)일 경우는 큐에 넣지 않음.

        visited[currentX][currentY] = true;
      }
    }
  }

  if (met !== 0) {
    console.log(met);
  } else {
    console.log("TT");
  }
});
