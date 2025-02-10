const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let result = "";

for (let i = parseInt(input); i > 0; i--) {
  let star = "";
  for(let j = 0; j < i ; j++) {
    star += "*"
  }
  result += star + '\n';
}

console.log(result);
