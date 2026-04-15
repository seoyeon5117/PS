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
  const house = [];
  for (let i = 1; i <= N; i++) {
    house.push(input[i].split(" ").map(Number));
  }
  let cnt = 0;

  function canMove(x, y) {
    return x < N && y < N && house[x][y] === 0 ? true : false;
  }

  // direction: 0 = 가로, 1 = 세로, 2 = 대각선
  function dfs(x, y, dir) {
    if (x === N - 1 && y === N - 1) {
      cnt++;
      return;
    }

    // 가로
    if ((dir === 0 || dir == 2) && canMove(x, y + 1)) dfs(x, y + 1, 0);

    // 세로
    if ((dir === 1 || dir == 2) && canMove(x + 1, y)) dfs(x + 1, y, 1);

    // 대각선
    if (canMove(x + 1, y) && canMove(x, y + 1) && canMove(x + 1, y + 1))
      dfs(x + 1, y + 1, 2);
  }

  dfs(0, 1, 0);
  console.log(cnt);
});
