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
  const array = new Array(N);

  for (let i = 0; i < N; i++) {
    array[i] = input[i + 1].split(" ").map(Number);
  }
  const dp = array;

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (dp[i][j] !== 1) {
          if (dp[i][k] === 1 && dp[k][j] === 1) {
            dp[i][j] = 1;
          }
        }
      }
    }
  }

  console.log(dp.map((line) => line.join(" ")).join("\n"));
});
