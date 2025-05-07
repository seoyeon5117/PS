const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = Number(input[0]);
  const person = new Array(N);
  for (let i = 0; i < N; i++) {
    person[i] = input[i + 1].split(" ").map(Number);
  }

  const result = new Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (person[i][0] > person[j][0] && person[i][1] > person[j][1]) {
        result[j] += 1;
      } else if (person[i][0] < person[j][0] && person[i][1] < person[j][1]) {
        result[i] += 1;
      }
    }
  }
  console.log(result.join(" "));
});
