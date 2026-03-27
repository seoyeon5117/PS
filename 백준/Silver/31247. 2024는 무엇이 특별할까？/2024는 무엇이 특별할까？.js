const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// To(n) = n의 약수이면서 홀수인 양의 정수의 개수
// Te(n) = n의 약수이면서 짝수인 양의 정수의 개수
// K-특별한 수 = (Te(x) = K x To(x)를 만족하는 양의 정수 x)

// 2 = 2^1 * 1 -> 1*d(1) = 1, d(1) = 1, k=1
// 4 = 2^2 * 1 -> 2*d(1) = 2, d(1) = 1, k=2
// 6 = 2^1 * 3 -> 1*d(3) = 2, d(3) = 2, k=1
// 8 = 2^3 * 1 -> 3*d(1) = 3, d(1) = 1, k=3
// 10 = 2^1 * 5 -> 1*d(5) = 2, d(5) = 2, k=1

rl.on("close", () => {
  const T = +input[0];
  const result = [];
  for (let t = 1; t <= T; t++) {
    let [N, K] = input[t].split(" ").map(BigInt);

    // (N / 2n ** K) - (N / 2n ** (K + 1n))
    // 2n ** K Maximum BigInt size exceeded 떠서 2n으로 K번 나눠서 구하기
    while (N > 0 && K > 0) {
      N /= 2n;
      K--;
    }
    result.push((N + 1n) / 2n);
  }
  console.log(result.map((r) => r.toString()).join("\n"));
});
