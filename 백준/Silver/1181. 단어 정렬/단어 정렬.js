const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const n = parseInt(input[0]);
let arr = [];
let result = "";

for(let i = 1 ; i <= n ; i++) {
    arr.push(input[i].trim());
}

const set = new Set(arr);
arr = [...set];

arr.sort();
arr.sort((a, b) => a.length - b.length);

for(let j = 0 ; j < arr.length ; j++)
    result += arr[j] + "\n";
console.log(result);