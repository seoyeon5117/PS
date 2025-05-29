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
  const M = +input[1];
  const S = input[2];

  let count = 0;
  let pattern = 0;

  for (let i = 0; i < M - 2; i++) {
    if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
      pattern++;
      if (pattern === N) {
        count++;
        pattern--;
      }
      i++;
    } else {
      pattern = 0;
    }
  }

  console.log(count);
});
