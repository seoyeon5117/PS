const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length ; i++) {
  const [a, b] = input[i].split(" ").map((el) => parseInt(el));
  if (a === 0 && b === 0) return;
  console.log(a + b);
}
