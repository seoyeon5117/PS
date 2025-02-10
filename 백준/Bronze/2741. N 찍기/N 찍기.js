const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = "";

for (i = 1; i < parseInt(input) + 1; i++) {
  result += i + "\n";
}

console.log(result);
