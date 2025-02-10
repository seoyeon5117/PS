const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = "";

for (i = parseInt(input); i > 0; i--) {
  result += i + "\n";
}

console.log(result);
