const { join } = require("path");
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
  const [N, K] = input[0].split(" ").map(Number);
  const dp = new Array(K + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [w, v] = input[i + 1].split(" ").map(Number);

    for (let j = K; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
    }
  }

  console.log(dp[K]);
});
