const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");
const n = parseInt(input[0]);
const num = parseInt(input[1]);
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let direction = 0;
let arr = Array.from(Array(n), () => new Array(n).fill(0));
let x = 0;
let y = 0;
let resultX, resultY;
arr[0][0] = n*n;
if(num === n*n) {
    resultX = 1;
    resultY = 1;
}
for(let i = n*n-1 ; i > 0 ; i--) {
    if(x+dx[direction] >= n || y+dy[direction] >= n || x+dx[direction] < 0 || y+dy[direction] < 0 || arr[x+dx[direction]][y+dy[direction]] !== 0) {
        direction = (direction + 1) % 4;
    }
    x = x+dx[direction];
    y = y+dy[direction];
    arr[x][y] = i;
    if(i===num) {
        resultX = x + 1;
        resultY = y + 1;
    }
}

arr.forEach(row => console.log(row.join(' ')));
console.log(resultX + " " + resultY);