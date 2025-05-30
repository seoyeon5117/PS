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
  const [N, r, c] = input[0].split(" ").map(Number);
  let count = 0;

  function divide(row, col, count) {
    for (let i = N - 1; i >= 0; i--) {
      const r = Math.floor(row / 2 ** i);
      const c = Math.floor(col / 2 ** i);
      count *= 4;

      if (r === 0 && c === 0) {
        count += 0;
      } else if (r === 0 && c === 1) {
        count += 1;
      } else if (r === 1 && c === 0) {
        count += 2;
      } else if (r === 1 && c === 1) {
        count += 3;
      }

      row = row % 2 ** i;
      col = col % 2 ** i;
    }
    return count;
  }

  console.log(divide(r, c, count));
});
