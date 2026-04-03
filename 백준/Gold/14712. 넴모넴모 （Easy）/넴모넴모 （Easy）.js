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
  const [N, M] = input[0].split(" ").map(Number);
  const map = Array.from({ length: N }, () => new Array(M).fill(false));
  let cnt = 0;

  function backtracking(idx) {
    if (idx === N * M) {
      cnt++;
      return;
    }
    let r = Math.floor(idx / M);
    let c = idx % M;
    if (r > 0 && c > 0 && map[r - 1][c - 1] && map[r - 1][c] && map[r][c - 1]) {
      // 안 칠하고 넘어감
      backtracking(idx + 1);
    } else {
      // 칠함
      map[r][c] = true;
      backtracking(idx + 1);
      map[r][c] = false;
      backtracking(idx + 1);
    }
  }
  backtracking(0);

  console.log(cnt);
});
