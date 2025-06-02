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
  const pic = input.slice(1).map((line) => line.split(""));
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  const RGvisited = Array.from({ length: N }, () => new Array(N).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === false) {
        bfs(i, j);
        count++;
      }
    }
  }

  // bfs
  function bfs(i, j) {
    const queue = [];
    queue.push([i, j]);
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
          currentY < N &&
          visited[currentX][currentY] === false
        ) {
          if (
            (pic[x][y] === "B" && pic[currentX][currentY] === "B") ||
            (pic[x][y] === "R" && pic[currentX][currentY] === "R") ||
            (pic[x][y] === "G" && pic[currentX][currentY] === "G")
          ) {
            queue.push([currentX, currentY]);
            visited[currentX][currentY] = true;
          }
        }
      }
    }
  }

  let RGcount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (RGvisited[i][j] === false) {
        rgbfs(i, j);
        RGcount++;
      }
    }
  }

  // bfs
  function rgbfs(i, j) {
    const queue = [];
    queue.push([i, j]);
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
          currentY < N &&
          RGvisited[currentX][currentY] === false
        ) {
          if (pic[x][y] === "B") {
            if (pic[currentX][currentY] === "B") {
              queue.push([currentX, currentY]);
              RGvisited[currentX][currentY] = true;
            }
          } else {
            if (pic[currentX][currentY] !== "B") {
              queue.push([currentX, currentY]);
              RGvisited[currentX][currentY] = true;
            }
          }
        }
      }
    }
  }
  console.log(count + " " + RGcount);
});
