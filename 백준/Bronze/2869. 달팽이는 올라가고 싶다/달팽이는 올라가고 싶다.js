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
  let days;

  days = Math.ceil(V / (A - B));

  while ((A - B) * (days - 1) + B >= V) {
    days -= 1;
  }

  console.log(days);
});
