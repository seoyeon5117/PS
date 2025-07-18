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
  const table = new Array();
  for (let i = 1; i <= N; i++) {
    table.push(input[i].split(" ").map(Number));
  }
  const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] =
        dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + table[i - 1][j - 1];
    }
  }

  const answer = [];
  for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = input[N + i + 1].split(" ").map(Number);

    answer.push(
      dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1] - dp[x1 - 1][y1 - 1])
    );
  }

  console.log(answer.join("\n"));
});
