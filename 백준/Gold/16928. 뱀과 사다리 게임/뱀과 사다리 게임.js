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
  const [N, M] = input[0].split(" ").map((c) => +c);
  const ladder = new Map();
  const snake = new Map();
  for (let n = 0; n < N; n++) {
    const [k, v] = input[1 + n].split(" ").map((c) => +c);
    ladder.set(k, v);
  }
  for (let m = 0; m < M; m++) {
    const [k, v] = input[1 + N + m].split(" ").map((c) => +c);
    snake.set(k, v);
  }

  let result = 0;
  let idx = 0;
  const queue = [];
  queue.push([1, 0]);
  const visited = new Array(100).fill(false);
  while (queue.length > idx) {
    const [node, cnt] = queue[idx];

    if (!visited[node]) {
      visited[node] = true;

      // 주사위 1 ~ 6
      for (let i = 1; i <= 6; i++) {
        let next = node + i;

        if (ladder.has(next)) {
          // 사다리
          next = ladder.get(next);
        } else if (snake.has(next)) {
          // 뱀
          next = snake.get(next);
        }

        if (next < 100) {
          queue.push([next, cnt + 1]);
        } else if (next === 100) {
          result = cnt + 1;
          idx = queue.length; // while문 탈출
          break; // for문 탈출
        }
      }
    }
    idx++;
  }

  console.log(result);
});
