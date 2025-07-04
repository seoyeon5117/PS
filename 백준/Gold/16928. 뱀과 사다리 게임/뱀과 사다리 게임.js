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
  const map = new Map();
  for (let i = 1; i <= N + M; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    map.set(from, to);
  }

  const queue = [];
  const count = new Array(101).fill(0); // 각 칸까지 주사위 몇 번 굴려서 도달하는지
  const visited = new Array(101).fill(false);

  queue.push(1);
  let index = 0;
  while (queue[index]) {
    let now = queue[index++];

    for (let dice = 1; dice <= 6; dice++) {
      let next = now + dice;
      if (next > 100) continue; // 100 넘어가면 무시

      if (map.has(next)) {
        next = map.get(next);
      }

      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        count[next] = count[now] + 1;
      }
    }
  }

  console.log(count[100]);
});
