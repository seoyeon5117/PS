const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");
NM = input[0].split(" ");
const n = parseInt(NM[0]);
const m = parseInt(NM[1]);
let min = 64;
let chess = [];
for(let i = 1 ; i <= n ; i++) {
    chess[i-1] = input[i].trim().split("");
}
for(let i = 0 ; n-i >= 8 ; i++) {
    for(let j = 0 ; m-j >= 8 ; j++) {
        let paint = 0;
        for (let col = 0; col < 8; col += 2) {
            for (let row = 0; row < 8; row += 2) {
                if (chess[i + col][j + row] !== 'B')
                    paint += 1;
                if (chess[i + col][j + row + 1] !== 'W')
                    paint += 1;
                if (chess[i + col + 1][j + row + 1] !== 'B')
                    paint += 1;
                if (chess[i + col + 1][j + row] !== 'W')
                    paint += 1;
            }
        }
        if (min > paint)
            min = paint;
    }
}
for(let i = 0 ; n-i >= 8 ; i++) {
    for(let j = 0 ; m-j >= 8 ; j++) {
        let paint = 0;
        for (let col = 0; col < 8; col += 2) {
            for (let row = 0; row < 8; row += 2) {
                if (chess[i + col][j + row] !== 'W')
                    paint += 1;
                if (chess[i + col][j + row + 1] !== 'B')
                    paint += 1;
                if (chess[i + col + 1][j + row + 1] !== 'W')
                    paint += 1;
                if (chess[i + col + 1][j + row] !== 'B')
                    paint += 1;
            }
        }
        if (min > paint)
            min = paint;
    }
}
console.log(min);