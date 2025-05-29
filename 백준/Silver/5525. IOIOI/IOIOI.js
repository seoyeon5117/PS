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
  const M = +input[1];
  const S = input[2].split("");
  let count = 0;

  let i = 0;
  while (i < M - 2) {
    let idx = 1;
    if (S[i] === "I") {
      let isIncluded = true;
      while (idx <= N * 2) {
        if (S[i + idx] === "O" && S[i + idx + 1] === "I") {
          idx += 2;
        } else {
          isIncluded = false;
          break;
        }
      }
      if (isIncluded === true) {
        count++; // S에 Pn 발견
        while (true) {
          if (S[i + idx] === "O" && S[i + idx + 1] === "I") {
            count++; // 다음 두 개가 OI이면 다음 것도 포함
            idx += 2;
          } else {
            i += idx;
            break;
          }
        }
      } else {
        // Pn 발견 못함
        i++;
      }
    } else {
      // 처음부터 포함 안됨
      i++;
    }
  }
  console.log(count);
});
