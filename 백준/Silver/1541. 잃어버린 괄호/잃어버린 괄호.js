const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.trim();
});

// - -> 뒤에 나오는 +부터 다 -로
// + -> 그냥 더하기
rl.on("close", () => {
  const line = input.split("-");
  const sums = [];
  for (const l of line) {
    const numbers = l.split("+").map(Number);
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    sums.push(sum);
  }
  let result = sums[0] + sums[0];
  for (const sum of sums) {
    result -= sum;
  }
  console.log(result);
});
