const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" "));
const n = parseInt(input[0][0]);
const k = parseInt(input[0][1]);
let items = [{}];

for(let i = 1 ; i <= n ; i++) {
    let item = {
        weight: parseInt(input[i][0]),
        cost: parseInt(input[i][1])
    };
    items.push(item);
}

let dp = Array.from(Array(n+1), () => new Array(k+1).fill(0));

for(let i = 1 ; i <= n ; i++) {
    for(let j = 1 ; j <= k ; j++) {
        if(items[i].weight <= j)
            dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-items[i].weight] + items[i].cost);
        else
            dp[i][j] = dp[i-1][j];
    }
}
console.log(dp[n][k]);