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
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);
  const range = input.slice(2).map((line) => line.split(" "));
  const sum = new Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    sum[i] = sum[i - 1] + numbers[i - 1];
  }

  const result = [];
  for (const r of range) {
    const [f, e] = r.map(Number);
    result.push(sum[e] - sum[f - 1]);
  }
  console.log(result.join("\n"));
});
