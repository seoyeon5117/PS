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
  const left = input[0].split(""); // 커서 왼쪽
  const right = []; // 커서 오른쪽
  const N = +input[1];
  const cmd = input.slice(2).map((line) => line.split(" "));

  for (const c of cmd) {
    if (c[0] === "L") {
      if (left.length > 0) right.push(left.pop());
    } else if (c[0] === "D") {
      if (right.length > 0) left.push(right.pop());
    } else if (c[0] === "B") {
      if (left.length > 0) left.pop();
    } else if (c[0] === "P") {
      left.push(c[1]);
    }
  }

  console.log(left.join("") + right.reverse().join(""));
});
