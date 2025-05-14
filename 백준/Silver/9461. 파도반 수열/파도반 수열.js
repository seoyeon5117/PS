const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
// P(6) = 3 -> P(1) + P(5)
// P(7) = 4 -> P(2) + P(6)
// P(8) = 5 -> P(3) + P(7)
// P(9) = 7 -> P(4) + P(8)
// P(10) = 9 -> P(5) + P(9)
// P(11) = 12 -> P(6) + P(10)
// P(12) = 16 -> P(7) + P(11)
rl.on("close", () => {
  const T = +input[0];
  const result = [];

  for (let t = 0; t < T; t++) {
    const tri = [0, 1, 1, 1, 2, 2]; // tri[0]은 무시
    const index = +input[t + 1];
    for (let i = 6; i <= index; i++) {
      tri[i] = tri[i - 5] + tri[i - 1];
    }
    result.push(tri[index]);
  }
  console.log(result.join("\n"));
});
