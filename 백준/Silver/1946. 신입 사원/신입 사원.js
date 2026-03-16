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
  const T = +input[0];
  let lineCnt = 0;
  const result = [];

  for (let t = 0; t < T; t++) {
    const N = +input[lineCnt + 1];
    const lank = []; // 서류, 면접 순위
    for (let n = 1; n <= N; n++) {
      const [a, b] = input[lineCnt + 1 + n].split(" ").map(Number);
      lank.push([a, b]);
    }
    lank.sort((a, b) => a[0] - b[0]);
    let cnt = 1; // 선발 가능한 사람 수
    let prevMinLank = lank[0][1]; // 앞 사람(성적 순위 높은 사람) 중 면접 순위가 제일 높은 사람
    for (let i = 1; i < N; i++) {
      if (prevMinLank > lank[i][1]) {
        cnt++;
        prevMinLank = lank[i][1];
      }
    }
    lineCnt += N + 1;
    result.push(cnt);
  }
  console.log(result.join("\n"));
});
