const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");
const n = parseInt(input[0]);
let notGroup = 0;
let group = n;
for(let i = 1 ; i <= n ; i++) {
    let word = input[i];
    let j = 0;
    while(j < input[i].length) {
        for(let k = j+1 ; k < input[i].length ; k++){
            if(word.charAt(k) === word.charAt(j) && !(word.charAt(k-1) === word.charAt(j))) {
                k = input[i].length;
                j = input[i].length;
                notGroup++;
            }
        }
        j++;
    }
}
console.log(group-notGroup);