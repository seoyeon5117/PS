let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const num = parseInt(input[0]);
let nums = [];

for (let i = 1; i < num + 1; i++) {
  nums.push(parseInt(input[i]));
}

nums = nums.sort((a, b) => a - b);

console.log(nums.join("\n"));
