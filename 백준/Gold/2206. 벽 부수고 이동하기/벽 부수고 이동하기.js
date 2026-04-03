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

  const map = Array.from({ length: N }, () => new Array(M)); // 0: 방문 가능, 1: 벽, 2: 방문함, 3: 벽을 부수고 방문함

  for (let i = 0; i < N; i++) {
    map[i] = input[i + 1].split("").map(Number);
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  let idx = 0;
  let result = -1;

  if (N === 1 && M === 1) {
    result = 1;
  }

  queue.push([0, 0, 1, false]); // x, y, dist, broken
  map[0][0] = 2;
  while (queue.length > idx) {
    const [x, y, dist, broken] = queue[idx++];
    for (let i = 0; i < 4; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];
      if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < M) {
        if (nextX === N - 1 && nextY === M - 1) {
          result = dist + 1;
          idx = queue.length; // while문 탈출
          break; // for문 탈출
        }
        if (map[nextX][nextY] === 0) {
          // 아무도 방문하지 않음. 아무나 방문 가능
          queue.push([nextX, nextY, dist + 1, broken]);
          if (broken) map[nextX][nextY] = 3;
          else map[nextX][nextY] = 2;
        } else if (map[nextX][nextY] === 1) {
          // 벽인 경우
          if (broken === false) {
            queue.push([nextX, nextY, dist + 1, true]); // 부수고 방문
          }
        } else if (map[nextX][nextY] === 2) {
          // 벽 안부순 애가 방문함. 이 경우 최단거리로 왔으니 패스
        } else {
          // 벽 부순 애가 방문함. 벽 안 부순 애만 방문 가능.
          if (broken === false) {
            map[nextX][nextY] = 2;
            queue.push([nextX, nextY, dist + 1, false]);
          }
        }
      }
    }
  }

  console.log(result);
});
