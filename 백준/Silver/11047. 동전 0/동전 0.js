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
  let [N, K] = input[0].split(" ").map(Number);
  const values = input.slice(1).map(Number).reverse();
  let count = 0;

  for (const value of values) {
    while (K >= value) {
      K -= value;
      count++;
    }
  }
  console.log(count);
});
