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
  const dot = [];
  for (let i = 1; i <= N; i++) {
    dot.push(input[i].split(" ").map(Number));
  }
  dot.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  console.log(dot.map((v) => v.join(" ")).join("\n"));
});
