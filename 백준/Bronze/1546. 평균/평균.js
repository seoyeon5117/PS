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
  const N = Number(input[0]);
  const nums = input[1].split(" ").map(Number);
  let max = 0;
  let result = 0;

  for (let num of nums) {
    if (num > max) max = num;
  }

  for (let num of nums) {
    result = result + num / max;
  }

  console.log((result / N) * 100);
});
