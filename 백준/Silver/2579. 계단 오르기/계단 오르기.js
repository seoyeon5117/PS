const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다.
rl.on("close", () => {
  const N = +input[0];
  const stairs = input.slice(1).map(Number);
  const dp = [];
  dp[0] = stairs[0]; // 첫번째 계단까지 올라가는데 얻을 수 있는 최대 점수
  dp[1] = stairs[0] + stairs[1]; // 두번째 계단까지 올라가는데 얻을 수 있는 최대 점수
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

  for (let i = 3; i < N; i++) {
    let max1 = dp[i - 3] + stairs[i - 1] + stairs[i];
    let max2 = dp[i - 2] + stairs[i]; // 두 칸 올라갈 경우
    dp[i] = Math.max(max1, max2);
  }
  console.log(dp[N - 1]);
});
