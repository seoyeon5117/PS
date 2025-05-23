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
  const arr = input.slice(1).map((line) => line.split(" ").map(Number));
  let white = 0;
  let blue = 0;

  // 더이상 자를 필요가 없을 때 white와 blue 개수 세기
  function divide(startRow, startCol, endRow, endCol) {
    const color = arr[startRow][startCol];
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        if (arr[i][j] !== color) {
          const midRow = Math.floor((startRow + endRow) / 2);
          const midCol = Math.floor((startCol + endCol) / 2);
          divide(startRow, startCol, midRow, midCol);
          divide(startRow, midCol + 1, midRow, endCol);
          divide(midRow + 1, startCol, endRow, midCol);
          divide(midRow + 1, midCol + 1, endRow, endCol);
          return;
        }
      }
    }

    if (color === 0) {
      white++;
    } else {
      blue++;
    }
  }

  divide(0, 0, N - 1, N - 1);

  console.log(white + "\n" + blue);
});
