const { count } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// R 몇 번인지 세기
// 현재까지 R 몇 번 나왔나에 따라서 D 나오면 앞 혹은 뒤 숫자 제거
rl.on("close", () => {
  const T = +input[0];
  const result = [];

  for (let t = 0; t < T; t++) {
    const p = input[t * 3 + 1].split("");
    const n = +input[t * 3 + 2];
    const arr = JSON.parse(input[t * 3 + 3]);
    let countR = 0;
    let front = 0;
    let rear = n - 1;
    for (const cmd of p) {
      if (cmd === "R") {
        countR++;
      } else if (cmd === "D") {
        if (rear - front < 0) {
          result.push("error");
          break;
        }
        // 짝수면 앞 제거
        if (countR % 2 === 0) {
          front++;
        } else {
          rear--;
        }
      }
    }
    // result에 에러 없을 경우
    if (!result[t]) {
      if (countR % 2 === 0) {
        result.push("[" + arr.slice(front, rear + 1) + "]");
      } else {
        result.push("[" + arr.slice(front, rear + 1).reverse() + "]");
      }
    }
  }

  console.log(result.join("\n"));
});
