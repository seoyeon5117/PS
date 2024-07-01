const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const t = input[0][0];
let result;
for(let i = 1 ; i <= t ; i++) {
    result = input[i][0] + input[i][1];
    console.log("Case #" + i + ": " + result);
}