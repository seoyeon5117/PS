const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
let i = 0;
let result = "";
while(input[i] !== undefined) {
    result += input[i][0] + input[i][1] + "\n";
    i++;
}
console.log(result);