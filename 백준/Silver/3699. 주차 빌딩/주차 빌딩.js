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
  const T = +input[0];

  const result = [];
  let idx = 0;
  for (let t = 1; t <= T; t++) {
    const [H, L] = input[idx + t * 1].split(" ").map(Number);

    let total = 0;

    for (let h = 0; h < H; h++) {
      const arr = input[idx + t * 1 + h + 1].split(" ").map(Number);
      const sorted = [...arr].filter((c) => c !== -1).sort((a, b) => a - b); // 순서

      let j = 0;
      let curr = 0;
      let time = 0;
      let prev = 0;
      while (j < sorted.length) {
        if (sorted[j] === arr[curr % L]) {
          j++;
          time += Math.min(curr - prev, L - (curr - prev));
          prev = curr;
        }
        curr++;
      }
      total += h * 20 * j + 5 * time;
    }
    result.push(total);

    idx += H;
  }
  console.log(result.join("\n"));
});
