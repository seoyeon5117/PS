const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 수빈: N, 동생: K
// 걷기: 1초 후 X-1 or X+1
// 순간이동: 0초 후 2*X

rl.on("close", () => {
  const [N, K] = input[0].split(" ").map(Number);

  const visited = new Array(K * 2 + 1).fill(false); // 0 ~ K*2
  const queue = [[N, 0]];
  let idx = 0;
  // bfs
  while (queue.length > idx) {
    const [i, time] = queue[idx++];
    if (i === K) {
      console.log(time);
      break;
    }
    if (!visited[i]) {
      visited[i] = true;
      if (i * 2 < K * 2) {
        queue[--idx] = [i * 2, time]; // 시간 증가 안하므로 순간이동하는 경우부터
      }
      if (i - 1 >= 0) {
        queue.push([i - 1, time + 1]);
      }
      if (i + 1 <= K * 2) {
        queue.push([i + 1, time + 1]);
      }
    }
  }
});
