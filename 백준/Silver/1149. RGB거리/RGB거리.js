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
  const cost = Array.from({ length: N }, () => []);
  for (let i = 0; i < N; i++) {
    cost[i] = input[i + 1].split(" ").map(Number);
  }

  const dp = Array.from({ length: N }, () => []);
  dp[0] = cost[0];

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0)
        dp[i][j] = Math.min(
          dp[i - 1][1] + cost[i][j],
          dp[i - 1][2] + cost[i][j]
        );
      else if (j === 1)
        dp[i][j] = Math.min(
          dp[i - 1][0] + cost[i][j],
          dp[i - 1][2] + cost[i][j]
        );
      else {
        dp[i][j] = Math.min(
          dp[i - 1][0] + cost[i][j],
          dp[i - 1][1] + cost[i][j]
        );
      }
    }
  }

  console.log(Math.min(...dp[N - 1]));
});
