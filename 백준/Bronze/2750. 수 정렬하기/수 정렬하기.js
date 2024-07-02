const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const n = parseInt(input[0]);
let nums = [];
for(let i = 1 ; i <= n ; i++) {
    nums[i-1] = parseInt(input[i].trim());
}
nums = nums.sort((a, b) => a-b);
for(let j = 0 ; j < n ; j++)
    console.log(nums[j]);