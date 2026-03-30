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
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let i = 0;
  let j = N - 1;
  let total = 0;
  while (i < j) {
    if (arr[i] + arr[j] >= M) {
      i++;
      j--;
      total++;
    } else {
      i++;
    }
  }

  console.log(total);
});
