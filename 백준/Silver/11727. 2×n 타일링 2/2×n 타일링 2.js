const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 1 3 6 10
rl.on("close", () => {
  const n = +input[0];
  const dp = [];
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i <= n; i++) {
    // 2 x (i-1)에서 세로 타일 하나 + 2 x (i-2)에서 가로 타일 2개나 2x2 타일 하나
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }

  console.log(dp[n]);
});
