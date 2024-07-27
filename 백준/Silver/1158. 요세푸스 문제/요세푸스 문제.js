const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ");
let [n, k] = input.map(Number);
let circle = Array(n).fill(0);
let rid = 0;
let answer = [];
let cnt = 0;
while(answer.length < n) {
    if(circle[rid] === 0) {
        cnt++;
        if(cnt === k) {
            circle[rid] = 1;
            answer.push(rid+1);
            cnt = 0;
        }
    }
    rid++;
    if(rid > n)
        rid = 0;
}

const result = answer.join(", ");
console.log("<"+ result +">");