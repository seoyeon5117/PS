const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const N = input[0][0];
let min = input[1][0];
let max = input[1][0];
for(let i = 1; i < N ; i++){
    if(min > input[1][i])
        min = input[1][i];
    if(max < input[1][i])
        max = input[1][i];
}
console.log(min + ' ' + max);