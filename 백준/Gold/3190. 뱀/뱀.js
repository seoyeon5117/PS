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
  const K = +input[1];
  const apples = Array.from({ length: N }, () => Array(N).fill(false));
  const dirc = new Array(10000).fill(-1);

  let a, b;
  for (let k = 0; k < K; k++) {
    [a, b] = input[k + 2].split(" ").map(Number);
    apples[a - 1][b - 1] = true;
  }
  const L = +input[K + 2];
  for (let l = 0; l < L; l++) {
    const [X, C] = input[l + K + 3].split(" ");
    dirc[+X] = C;
  }

  const dx = [0, -1, 0, 1]; // 왼, 위, 오, 아래
  const dy = [-1, 0, 1, 0];

  const visited = Array.from({ length: N }, () => Array(N).fill(-1)); // visited에 방향 숫자로 저장
  let direction = 2; // 오른쪽
  let time = 0;
  visited[0][0] = direction;
  let prevX = 0,
    prevY = 0;
  let currX = 0,
    currY = 0;
  let tailX = 0,
    tailY = 0;
  while (time < 10000) {
    if (dirc[time] !== -1) {
      if (dirc[time] === "L") {
        direction = (direction + 4 - 1) % 4;
      } else {
        direction = (direction + 1) % 4;
      }
      visited[currX][currY] = direction;
    }
    time++;
    currX = prevX + dx[direction];
    currY = prevY + dy[direction];
    prevX = currX;
    prevY = currY;

    if (
      currX >= 0 &&
      currY >= 0 &&
      currX < N &&
      currY < N &&
      visited[currX][currY] === -1
    ) {
      // 사과 없을때
      if (apples[currX][currY] === false) {
        let tailDir = visited[tailX][tailY]; // 다음 꼬리 방향
        visited[tailX][tailY] = -1; // 꼬리 지우기

        // 그 다음 꼬리 지정
        tailX += dx[tailDir];
        tailY += dy[tailDir];
      } else {
        apples[currX][currY] = false; // 사과 먹기
      }
      visited[currX][currY] = direction;
    } else {
      // 벽에 부딪히거나 자기자신과 부딪힘
      break;
    }
  }
  console.log(time);
});
