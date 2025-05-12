const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let N, K;

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 1) {
    [N, K] = input[0].split(" ").map(Number); // 가지고 있는 케이블 개수, 필요한 케이블 개수
  }
  if (input.length === N + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const cables = input.slice(1).map(Number);
  let count; // 총 케이블 개수

  let min = 1; // 케이블 길이
  let max = Math.max(...cables); // 케이블 길이
  let result = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    count = 0;
    for (const cable of cables) {
      count += Math.floor(cable / mid);
    }
    if (K <= count) {
      result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  console.log(result);
});
