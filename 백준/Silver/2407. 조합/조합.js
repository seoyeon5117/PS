const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ");
const n = BigInt(input[0]);
const m = BigInt(input[1]);
let result = 1n
for(let i = n ; i > n-m ; i--) {
    result *= i;
}
for(let j = m ; j > 0 ; j--) {
    result /= j;
}
console.log(result.toString());