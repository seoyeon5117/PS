const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 체크 = 10 - (isbn 합) % 10
// 10 - 체크 = isbn 합 % 10
// 13자리
rl.on("close", () => {
  const isbn = input[0].split("");

  let sum = 0;
  let index;
  for (let i = 0; i < 12; i++) {
    if (isbn[i] === "*") index = i;
    else if (i % 2 === 0) sum += +isbn[i];
    else sum += 3 * +isbn[i];
  }

  let temp = 10 - +isbn[12];
  if (temp === 10) temp = 0;

  if (index % 2 === 0) {
    for (let i = 0; i < 10; i++) {
      if (temp === (sum + i) % 10) {
        console.log(i);
        break;
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (temp === (sum + i * 3) % 10) {
        console.log(i);
      }
    }
  }
});
