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

  const result = [];
  const arr = [];

  function backtracking(length) {
    if (length === M) {
      result.push(arr.join(" "));
      return;
    }
    for (let i = 1; i <= N; i++) {
      arr.push(i);
      backtracking(length + 1);
      arr.pop();
    }
  }
  backtracking(0);
  console.log(result.join("\n"));
});
