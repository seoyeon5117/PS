const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
  rl.close();
});

rl.on("close", () => {
  const [A, B, V] = input;
  const day = Math.ceil((V - A) / (A - B)) + 1;

  console.log(day);
});
