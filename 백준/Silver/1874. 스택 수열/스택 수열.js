const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (line.length === Number(input[0]) + 1) rl.close();
});

rl.on("close", () => {
  const N = Number(input[0]);
  const arr = input.splice(1).map(Number);
  let result = [];

  const stack = [];

  const numbers = [];
  for (let i = 0; i < N; i++) {
    numbers[i] = i + 1;
  }

  let no = false;

  let index = 0;

  for (let i = 0; i < N; i++) {
    while (stack[stack.length - 1] !== arr[i]) {
      if (stack.length === 0) {
        stack.push(numbers[index]);
        result.push("+");
        index++;
      } else if (stack[stack.length - 1] < arr[i]) {
        stack.push(numbers[index]);
        result.push("+");
        index++;
      } else {
        // stack[stack.length - 1] > arr[i]
        no = true;
        i = N;
        break;
      }
    }
    if (stack[stack.length - 1] === arr[i]) {
      stack.pop();
      result.push("-");
    }
  }
  if (no) {
    console.log("NO");
  } else {
    console.log(result.join("\n"));
  }
});
