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

  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    let sum = 0;
    let j = 0;
    while (sum < N) {
      sum += i + j;
      j++;
    }
    if (sum === N) cnt++;
  }

  console.log(cnt);
});
