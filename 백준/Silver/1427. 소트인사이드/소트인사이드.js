const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("");
let nums = [];
for(let i = 0 ; i < input.length ; i++)
    nums.push(parseInt(input[i]));
nums.sort((a,b) => b-a);

let result = "";
for(let i = 0 ; i < nums.length ; i++)
    result += nums[i];
console.log(result);