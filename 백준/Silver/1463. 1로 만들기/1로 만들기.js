const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

// 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

rl.on("line", (line) => {
  N = +line.trim();
});

rl.on("close", () => {
  const dp = new Array(N);
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i <= N; i++) {
    let min1 = dp[i - 1] + 1;
    let min2 = Infinity;
    let min3 = Infinity;
    if (i % 2 === 0) {
      min2 = dp[i / 2] + 1;
    }
    if (i % 3 === 0) {
      min3 = dp[i / 3] + 1;
    }
    dp[i] = Math.min(min1, min2, min3);
  }

  console.log(dp[N]);
});
