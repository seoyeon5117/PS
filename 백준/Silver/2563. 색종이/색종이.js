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
  const grid = Array.from({ length: 100 }, () => new Array(100).fill(false));

  for (let n = 1; n <= N; n++) {
    const [x, y] = input[n].split(" ").map(Number);
    for (let i = x; i < x + 10; i++) {
      for (let j = y; j < y + 10; j++) {
        grid[i][j] = true;
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (grid[i][j]) sum++;
    }
  }

  console.log(sum);
});
