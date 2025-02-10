const [num, input] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let result = 0;
let number = input.split("");
for (let i = 0; i < parseInt(num); i++) {
  result += parseInt(number[i]);
}
console.log(result);
