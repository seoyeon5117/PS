const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = Number(line);
  rl.close();
});

rl.on("close", () => {
  let string = factorial(input).toString();
  let count = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "0") {
      count++;
    } else {
      break;
    }
  }
  console.log(count);

  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1n;
    }
    return factorial(num - 1) * BigInt(num);
  }
});
