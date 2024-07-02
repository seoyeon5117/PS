const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const n = parseInt(input[0]);
let nums = [];
for(let i = 1 ; i <= n ; i++) {
    nums.push(parseInt(input[i]));
}
nums = nums.sort((a, b) => a-b);
let result = "";
for(let j = 0 ; j < n ; j++)
    result += nums[j] + "\n";
console.log(result);