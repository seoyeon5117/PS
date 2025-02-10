const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

for (i = 0; i < input.length; i+=10) {
  console.log(input.slice(i, i+10));
}
