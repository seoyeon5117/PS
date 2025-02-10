const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");
const num = parseInt(input[0]);

for(let i = 1 ; i < num+1 ; i++ ) {
    const [a, b] = input[i].split(" ").map(el => parseInt(el));
    console.log(a+b);
}