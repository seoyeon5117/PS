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
  const tanghulu = input[1].split(" ").map(Number);
  let left = 0;
  let max = 0;
  const count = new Map();

  for (let right = 0; right < N; right++) {
    const current = tanghulu[right];
    count.set(current, (count.get(current) || 0) + 1);

    while (count.size > 2) {
      const leftFruit = tanghulu[left];
      count.set(leftFruit, count.get(leftFruit) - 1);
      if (count.get(leftFruit) === 0) {
        count.delete(leftFruit);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  console.log(max);
});
