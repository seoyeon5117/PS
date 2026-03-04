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
  const n = +input[0];
  const boxes = input[1].split(" ").map((c) => +c);
  const dp = new Array(n);

  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let dpMax = 0;
    for (let j = 0; j < i; j++) {
      if (boxes[i] > boxes[j] && dpMax < dp[j]) {
        dpMax = dp[j];
      }
    }
    dp[i] = dpMax + 1;
  }

  let max = 0;
  for (let j = 0; j < n; j++) {
    if (max < dp[j]) {
      max = dp[j];
    }
  }

  console.log(max);
});
