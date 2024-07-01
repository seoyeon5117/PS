const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((el) => el.split(" ").map(Number));
const t = input[0][0];
for(let i = 1 ; i <= t ; i++){
    let n = input[i][0];
    let m = input[i][1];
    let f = Array.from(Array(30), () => new Array(30).fill(0));
    for(let j = 1 ; j <= n ; j++){
        for(let k = 1 ; k <= m ; k++){
            if (j === 1)
                f[j][k] = k;
            else if (j === k)
                f[j][k] = 1;
            else
                for(let p = k-1 ; p > 0 ; p--)
                    f[j][k] += f[j-1][p];
        }
    }
    console.log(f[n][m]);
}
