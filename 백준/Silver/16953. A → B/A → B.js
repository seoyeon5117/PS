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
  const [a, b] = input[0].split(" ").map(Number);
  let answer = -1;

  let index = 0;
  const queue = [];
  queue.push({ num: a, count: 1 });
  while (queue.length > index) {
    const { num, count } = queue[index++];
    if (num === b) {
      answer = count;
      break;
    } else if (num < b) {
      queue.push({ num: num * 2, count: count + 1 });
      queue.push({ num: num * 10 + 1, count: count + 1 });
    }
  }

  console.log(answer);
});
