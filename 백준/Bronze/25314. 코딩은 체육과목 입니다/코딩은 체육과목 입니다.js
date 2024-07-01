const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString();
const n = parseInt(input) / 4;
let result = "";
for(let i = 0 ; i < n ; i++) {
    result += "long "
}
console.log(result + "int");