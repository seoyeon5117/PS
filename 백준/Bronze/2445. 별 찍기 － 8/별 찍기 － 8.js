const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const num = parseInt(input);
let result = "";

for (let i = 1; i < num; i++) {
  result += "*".repeat(i) + " ".repeat((num - i) * 2) + "*".repeat(i) + "\n";
}
for (let i = num; i > 0; i--) {
  result += "*".repeat(i) + " ".repeat((num - i) * 2) + "*".repeat(i) + "\n";
}

console.log(result);
