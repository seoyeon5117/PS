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
  const [M, N] = input[0].split(" ").map(Number);
  const snacks = input[1].split(" ").map(Number);

  let left = 0;
  let right = Math.max(...snacks);
  let max = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (const snack of snacks) {
      count += Math.floor(snack / mid);
    }
    if (count >= M) {
      left = mid + 1;
      max = mid;
    } else if (count < M) {
      right = mid - 1;
    }
  }

  console.log(max);
});
