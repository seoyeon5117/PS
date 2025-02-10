const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = "";

for (let i = parseInt(input); i > 0; i--) {
  result += "*".repeat(i) + '\n';
}

console.log(result);
