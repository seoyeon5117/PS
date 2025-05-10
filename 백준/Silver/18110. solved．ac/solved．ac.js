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
  const num = Number(input[0]); // 사람 수
  const levels = input.slice(1).map(Number);
  levels.sort((a, b) => a - b);
  const exclude = Math.round(num * 0.15); // 제외해야하는 사람 수
  let result = 0;

  for (let i = exclude; i < num - exclude; i++) {
    result += levels[i];
  }
  if (result !== 0) {
    result = Math.round(result / (num - exclude * 2));
  }

  console.log(result);
});
