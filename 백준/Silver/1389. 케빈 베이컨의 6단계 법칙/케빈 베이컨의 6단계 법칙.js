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
  const [N, M] = input[0].split(" ").map(Number); // 유저의 수 N (2 ≤ N ≤ 100)과 친구 관계의 수 M (1 ≤ M ≤ 5,000)
  const dp = new Array(N + 1);
  const bacon = new Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    dp[i] = new Array(N + 1);
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Infinity;
        dp[j][i] = Infinity;
      }
    }
  }

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    dp[a][b] = 1;
    dp[b][a] = 1;
  }

  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= i; j++) {
        dp[i][j] = Math.min(dp[i][k] + dp[k][j], dp[i][j]);
        dp[j][i] = dp[i][j];
      }
    }
  }

  let min = Infinity;
  let result = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      bacon[i] += dp[i][j];
    }
    if (min > bacon[i]) {
      min = bacon[i];
      result = i;
    }
  }

  console.log(result);
});
