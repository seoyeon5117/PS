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

  let cnt = 0;
  let visited = Array.from({ length: N }, () => new Array(N).fill(false));
  function backtracking(row) {
    if (row === N) {
      cnt++;
      return;
    } // 퀸 N개 고름

    for (let j = 0; j < N; j++) {
      if (!visited[row][j]) {
        const prev = visited.map((r) => [...r]);
        for (let k = 0; k < N; k++) {
          visited[row][k] = true; // 방문 못할 예정
          visited[k][j] = true; // 방문 못할 예정
        }
        for (let k = 1; k < N; k++) {
          if (row + k < N && j + k < N) {
            visited[row + k][j + k] = true;
          }
          if (row - k >= 0 && j - k >= 0) {
            visited[row - k][j - k] = true;
          }
          if (row + k < N && j - k >= 0) {
            visited[row + k][j - k] = true;
          }
          if (row - k >= 0 && j + k < N) {
            visited[row - k][j + k] = true;
          }
        }
        backtracking(row + 1);
        visited = prev;
      }
    }
  }

  backtracking(0);

  console.log(cnt);
});
