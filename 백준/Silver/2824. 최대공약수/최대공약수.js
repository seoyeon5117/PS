const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const N = +input[0];
  const arr1 = input[1].split(" ").map(Number);
  const M = +input[2];
  const arr2 = input[3].split(" ").map(Number);
  let max = 1n;

  for (let k = 0; k < N; k++) {
    let i = 1;
    let div = 1;
    while (arr1[k] !== 1 && i <= Math.sqrt(arr1[k])) {
      if (arr1[k] % i === 0) {
        div = arr1[k] / i;
        for (let j = 0; j < M; j++) {
          if (arr2[j] % div === 0) {
            arr1[k] = i;
            arr2[j] /= div;
            max *= BigInt(div);
            i = 0;
            break;
          } else if (i !== 1 && arr2[j] % i === 0) {
            arr1[k] = div;
            arr2[j] /= i;
            max *= BigInt(i);
            i = 0;
            break;
          }
        }
      }
      i++;
    }
  }

  console.log(max.toString().slice(-9));
});
