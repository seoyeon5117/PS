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
  const boards = Array.from({ length: 5 }, () => new Array(5));

  for (let t = 0; t < 5; t++) {
    for (let j = 0; j < 5; j++) {
      boards[t][j] = input[j + 5 * t].split(" ").map(Number);
    }
  }
  let result = Infinity;

  function bfs(brd) {
    if (brd[0][0][0] === 0 || brd[4][4][4] === 0) return Infinity;
    const dx = [-1, 0, 1, 0, 0, 0];
    const dy = [0, 1, 0, -1, 0, 0];
    const dz = [0, 0, 0, 0, 1, -1];

    const visited = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => new Array(5).fill(false)),
    );

    let idx = 0;
    const queue = [[0, 0, 0, 0]];

    while (queue.length > idx) {
      let [prevX, prevY, prevZ, mv] = queue[idx++];
      for (let i = 0; i < 6; i++) {
        let currX = prevX + dx[i];
        let currY = prevY + dy[i];
        let currZ = prevZ + dz[i];
        if (currX === 4 && currY === 4 && currZ === 4) {
          return mv + 1;
        }
        if (
          currX >= 0 &&
          currX < 5 &&
          currY >= 0 &&
          currY < 5 &&
          currZ >= 0 &&
          currZ < 5 &&
          !visited[currZ][currX][currY] &&
          brd[currZ][currX][currY] === 1
        ) {
          visited[currZ][currX][currY] = true;
          queue.push([currX, currY, currZ, mv + 1]);
        }
      }
    }
    return Infinity;
  }

  // 보드 돌리기
  function rotate(prevboards) {
    const next = Array.from({ length: 5 }, () => new Array(5));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        next[i][j] = prevboards[j][4 - i];
      }
    }
    return next;
  }

  // 보드를 돌린 모든 경우 배열
  const allRotations = boards.map((board) => {
    const rotations = [board];
    for (let j = 0; j < 4; j++) {
      rotations.push(rotate(rotations[rotations.length - 1]));
    }
    return rotations;
  });

  function combineRotation(curr, order, rotateState) {
    if (curr === 5) {
      // 5번째 보드
      const grid = order.map((i, idx) => allRotations[i][rotateState[idx]]);
      result = Math.min(result, bfs(grid));
      return;
    }

    for (let r = 0; r < 4; r++) {
      rotateState[curr] = r;
      combineRotation(curr + 1, order, rotateState);
    }
  }

  const visited = new Array(5).fill(false);
  const arr = [];
  function combine() {
    if (arr.length === 5) {
      combineRotation(0, [...arr], new Array(5).fill(0));
      return;
    }
    for (let i = 0; i < 5; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(i);
        combine();
        arr.pop();
        visited[i] = false;
      }
    }
  }

  combine();

  console.log(result === Infinity ? -1 : result);
});
