const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (line.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  const cards = input[1].split(" ").map(Number);
  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let k = 1; k < N; k++) {
      for (let l = 2; l < N; l++) {
        let sum = cards[i] + cards[k] + cards[l];
        if (sum <= M && result < sum && i !== k && i !== l && k !== l)
          result = sum;
      }
    }
  }

  console.log(result);
});
