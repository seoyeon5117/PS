const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = +input[0];
  const arr = input[1].split(" ").map(Number);
  const sorted = [...new Set(arr)].sort((a, b) => a - b);

  const map = new Map();

  for (let i = 0; i < N; i++) {
    map.set(sorted[i], i);
  }

  console.log(arr.map((v) => map.get(v)).join(" "));
});
