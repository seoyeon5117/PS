let notSelfNumber = [];
for(let i = 1 ; i <= 10000 ; i++) {
    let j = i;
    let sum = j;
    while(j !== 0) {
        sum += j % 10;
        j = Math.trunc(j / 10);
    }
    notSelfNumber.push(sum);
}
let array = [];
for(let i = 1 ; i <= 10000 ; i++) {
    array.push(i);
}
const SelfNumber = array.filter(x => !notSelfNumber.includes(x));

let result = "";
for(let i = 0 ; i < SelfNumber.length ; i++) {
    result += SelfNumber[i] + "\n";
}
console.log(result);