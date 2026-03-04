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
  const A = input[1].split(" ").map((c) => +c);
  const dp = new Array(N + 1);

  dp[0] = 1;

  for (let i = 1; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j]) {
        if (max < dp[j]) {
          max = dp[j];
        }
      }
    }
    dp[i] = max + 1;
  }

  let result = 0;
  for (let i = 0; i < N; i++) {
    if (result < dp[i]) {
      result = dp[i];
    }
  }

  console.log(result);
});
