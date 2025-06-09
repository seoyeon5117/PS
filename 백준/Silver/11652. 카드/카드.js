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
  const cards = input.slice(1).map((c) => BigInt(c));
  const map = new Map();

  for (const card of cards) {
    map.set(card, (map.get(card) || 0) + 1);
  }

  let max = 0;
  let result = -Infinity;

  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      result = BigInt(key);
    } else if (value === max && BigInt(result) > BigInt(key)) {
      result = BigInt(key);
    }
  }

  console.log(result.toString());
});
