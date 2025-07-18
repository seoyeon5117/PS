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
  const T = +input[0];
  const answer = [];
  for (let t = 0; t < T; t++) {
    const n = +input[t * 3 + 1];
    const sticker = [];
    sticker.push(input[t * 3 + 2].split(" ").map(Number));
    sticker.push(input[t * 3 + 3].split(" ").map(Number));

    const visited = Array.from({ length: 2 }, () => new Array(n).fill(false));
    const dx = [-1, 0];
    const dy = [0, 1];

    const dp = Array.from({ length: 2 }, () => new Array(n).fill(0)); // dp가 0이면 방문 안했다는 뜻

    dp[0][0] = sticker[0][0]; // 0행에서 스티커 선택
    dp[1][0] = sticker[1][0]; // 1행에서 스티커 선택

    dp[0][1] = dp[1][0] + sticker[0][1]; // 0행에서 스티커 선택
    dp[1][1] = dp[0][0] + sticker[1][1]; // 1행에서 스티커 선택

    for (let j = 2; j < n; j++) {
      dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + sticker[0][j];
      dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + sticker[1][j];
    }
    answer.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
  }
  console.log(answer.join("\n"));
});
