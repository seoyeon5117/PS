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
  const arr = input[1].split(" ").map(Number);
  const positive = new Array(N + 1).fill(0); // 거짓말쟁이가 n명 이상라고 주장하는 사람 수 positive[n]
  const negative = new Array(N + 1).fill(0); // 거짓말쟁이가 n명 이하라고 주장하는 사람 수 negative[n]
  const result = [];

  for (let n = 0; n < N; n++) {
    if (arr[n] > 0) {
      positive[arr[n]]++;
    } else {
      negative[-arr[n]]++;
    }
  }

  // 거짓말쟁이가 n+1명 이상이라고 주장하는 사람 수(n+1명 이상, n+2명 이상, ...)
  const suffix = new Array(N + 2).fill(0);
  for (let n = N - 1; n >= 0; n--) {
    suffix[n] = suffix[n + 1] + positive[n + 1];
  }

  // 거짓말쟁이가 n-1명 이하라고 주장하는 사람 수
  const prefix = new Array(N + 2).fill(0);
  for (let n = 1; n <= N; n++) {
    prefix[n] = prefix[n - 1] + negative[n - 1];
  }

  for (let n = 0; n <= N; n++) {
    let liars = suffix[n] + prefix[n];
    if (liars === n) {
      result.push(n);
    }
  }

  console.log(result.length + "\n" + result.join(" "));
});
