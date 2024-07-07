const input = require("fs")
    .readFileSync("./dev/stdin")
    .toString()
    .split("\n")
    .map(el => el.split(" "));
let [n, l] = input[0].map(Number);
const h = input[1].map(el => parseInt(el));
h.sort((a,b) => a - b);
let i = 0;
while(i < n && h[i] <= l) {
    i++;
    l++;
}
console.log(l);