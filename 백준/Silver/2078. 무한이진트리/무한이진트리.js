const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 왼쪽: (a+b, b) -> (a+b+b, b), (a+b, a+b+b)
// 오른쪽: (a, a+b) -> (a+a+b, a+b), (a, a+a+b)

// (1,1)
// (2,1) (1,2)
// (3,1) (2,3) (3,2) (1,3)
// (4,1) (3,4) (5,3) (2,5) (5,2) (3,5) (4,3) (1,4)
// (5,1) (4,5) (7,4) (3,7) (8,3) (5,8) (7,5) (2,7)...

rl.on("close", () => {
  let [a, b] = input[0].split(" ").map(Number);
  let left = 0;
  let right = 0;

  while (a !== 1 || b !== 1) {
    if (a === 1) {
      right += b - 1;
      break;
    }
    if (b === 1) {
      left += a - 1;
      break;
    }
    if (a > b) {
      left += Math.floor(a / b);
      a = a % b;
    } else {
      right += Math.floor(b / a);
      b = b % a;
    }
  }

  console.log(left + " " + right);
});
