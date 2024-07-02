const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));
const n = parseInt(input[0][0]);
let dates = [];
let date;

for(let i = 1 ; i <= n ; i++){
    date = {};
    date.name = input[i][0];
    date.day = parseInt(input[i][1]);
    date.month = parseInt(input[i][2]);
    date.year = parseInt(input[i][3]);
    dates.push(date);
}

dates.sort((a, b) => {
    if (a.year !== b.year)
        return a.year - b.year;
    else {
        if (a.month !== b.month)
            return a.month - b.month;
        else
            return a.day - b.day;
    }
})

console.log(dates[n-1].name + "\n" + dates[0].name);