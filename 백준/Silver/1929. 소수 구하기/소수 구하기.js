const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.trim().split(" ").map(Number);
  rl.close();
});

// 에라토스테네스의 체: 1부터 N까지의 수 중 소수의 배수를 제거하여 소수를 판별하는 방식
rl.on("close", () => {
  const [M, N] = input;

  const isPrime = new Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primeNumber = [];
  for (let i = M; i <= N; i++) {
    if (isPrime[i]) {
      primeNumber.push(i);
    }
  }

  console.log(primeNumber.join("\n"));
});
