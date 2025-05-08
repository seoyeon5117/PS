const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
  rl.close();
});

rl.on("close", () => {
  const N = input[0];
  let K = input[1];
  const queue = [];

  const result = [];

  for (let i = 0; i < N; i++) {
    queue[i] = i + 1;
  }

  for (let i = 0; i < N; i++) {
    for (let k = 0; k < K - 1; k++) {
      queue.push(queue.shift()); // 맨 앞 꺼내서 뒤로
    }
    result.push(queue.shift());
  }

  console.log("<" + result.join(", ") + ">");
});
