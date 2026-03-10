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
  const [N, M] = input[0].split(" ").map(Number);
  const nums = [
    ...new Set(
      input[1]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b),
    ),
  ];
  const result = new Set();
  const sequence = [];

  function backtracking(length, idx) {
    if (length === M) return result.add(sequence.join(" "));
    for (let i = idx; i < nums.length; i++) {
      sequence.push(nums[i]);

      backtracking(length + 1, i);

      sequence.pop();
    }
  }

  backtracking(0, 0);

  console.log([...result].join("\n"));
});
