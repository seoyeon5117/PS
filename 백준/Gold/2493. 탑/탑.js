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
  const towers = input[1].split(" ").map(Number);
  const result = new Array(N).fill(0);

  const stack = []; // 인덱스
  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && towers[stack[stack.length - 1]] < towers[i]) {
      stack.pop();
    }

    const last = stack.length;

    if (last) {
      result[i] = stack[last - 1] + 1;
    }

    stack.push(i);
  }
  console.log(result.join(" "));
});
