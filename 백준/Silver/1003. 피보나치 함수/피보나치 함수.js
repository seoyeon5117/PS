const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

// f(0) => 0 -> 1 0
// f(1) => 1 -> 0 1
// f(2) => f(1) + f(0) -> 1 1
// f(3) => f(2) + f(1) => f(1) + f(0) + f(1) -> 1 2
// f(4) => f(3) + f(2) => f(2) + f(1) + f(1) + f(0) => f(1) + f(0) + f(1) + f(1) + f(0) -> 2 3
// 결론: f(n) = f(n-1) + f(n-2)
rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const T = +input[0];
  const testcase = input.slice(1).map(Number);

  const result = [];
  for (const t of testcase) {
    result.push(f(t).join(" "));
  }
  console.log(result.join("\n"));
  function f(num) {
    const dp = [];
    dp[0] = [1, 0];
    dp[1] = [0, 1];

    for (let i = 2; i <= num; i++)
      dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];

    return dp[num];
  }
});
