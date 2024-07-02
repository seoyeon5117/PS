const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
const n = parseInt(input[0]);
let arr = [];
let result = "";

for(let i = 1 ; i <= n ; i++) {
    arr.push(input[i].trim());
}

const set = new Set(arr);
arr = [...set];

arr.sort((a, b) => {
    if (a.length !== b.length)
        return a.length - b.length;
    else {
        if (a < b)
            return -1;
        else
            return 0;
    }
})

for(let j = 0 ; j < arr.length ; j++)
    result += arr[j] + "\n";
console.log(result);