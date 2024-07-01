const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const n = input[0][0];
const m = input[0][1];
let max = 3;
let sum = 0;
for(let i = 0 ; i < n ; i++) {
    for (let j = 0; j < n; j++) {
        if (i !== j) {
            for (let k = 0; k < n; k++)
                if(i !== k && j !== k) {
                    sum = input[1][i] + input[1][j] + input[1][k];
                    if (max < sum && sum <= m)
                        max = sum;
                }
        }
    }
}
console.log(max);