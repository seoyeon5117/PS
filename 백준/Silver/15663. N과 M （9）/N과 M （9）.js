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
  const [N, M] = input[0].split(" ").map((c) => +c);
  const arr = input[1]
    .split(" ")
    .map((c) => +c)
    .sort((a, b) => a - b);
  const sequence = [];
  const visited = new Array(N).fill(false);
  const result = new Set();

  function backtracking(length) {
    if (length === M) result.add(sequence.join(" "));

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        sequence.push(arr[i]);

        backtracking(length + 1);

        visited[i] = false;
        sequence.pop();
      }
    }
  }

  backtracking(0);

  console.log([...result].join("\n"));
});
