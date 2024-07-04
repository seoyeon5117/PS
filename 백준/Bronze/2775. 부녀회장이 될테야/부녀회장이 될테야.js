const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const t = parseInt(input[0]);
let floor = [];
let room = [];
for(let i = 1 ; i <= t*2 ; i+=2) {
    floor.push(parseInt(input[i]));
    room.push(parseInt(input[i+1]));
}

let maxFloor = Math.max(...floor);
let maxRoom = Math.max(...room);

let dp = Array.from(Array(maxFloor+1), () => new Array(maxRoom).fill(0));
for(let i = 0 ; i <= maxFloor; i++)
    for(let k = 1 ; k <= maxRoom ; k++) {
        if(i === 0)
            dp[i][k] = k;
        else
            dp[i][k] = dp[i-1][k] + dp[i][k-1];
    }

let result = "";
for(let i = 0 ; i < t ; i++) {
    result += dp[floor[i]][room[i]] + "\n";
}
console.log(result);