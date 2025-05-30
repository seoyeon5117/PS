const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 시간초과
// rl.on("close", () => {
//   const [M, N, H] = input[0].split(" ").map(Number); // 상자 col M, row N, 상자 높이 H
//   const tomato = input.slice(1).map((line) => line.split(" ").map(Number));
//   const days = Array.from({ length: N * H }, () => new Array(M).fill(Infinity));

//   const dx = [-1, 0, 1, 0, N, -N]; // 마지막 두 개는 위, 아래
//   const dy = [0, 1, 0, -1, 0, 0];

//   const queue = [];
//   for (let i = 0; i < N * H; i++) {
//     for (let j = 0; j < M; j++) {
//       if (tomato[i][j] === 1) {
//         queue.push([i, j]);
//         days[i][j] = 0;
//       }
//     }
//   }
//   // bfs
//   while (queue.length > 0) {
//     const [x, y] = queue.shift();
//     const xIdx = Math.floor(x % N);
//     for (let n = 0; n < 6; n++) {
//       const currentX = x + dx[n];
//       const currentY = y + dy[n];
//       let day = days[x][y] + 1;
//       if (
//         currentX >= 0 &&
//         currentX < N * H &&
//         ((n < 4 && currentX >= x - xIdx && currentX < x - xIdx + N) ||
//           n >= 4) &&
//         currentY >= 0 &&
//         currentY < M &&
//         days[currentX][currentY] === Infinity
//       ) {
//         if (tomato[currentX][currentY] === 0) {
//           if (days[currentX][currentY] > day) {
//             days[currentX][currentY] = day;
//             queue.push([currentX, currentY]);
//           }
//         } else if (tomato[currentX][currentY] === -1) {
//           days[currentX][currentY] = -1;
//         }
//       }
//     }
//   }

//   let result = 0;
//   for (const day of days.flat()) {
//     if (day === Infinity) {
//       result = -1;
//       break;
//     } else if (result < day) {
//       result = day;
//     }
//   }

//   console.log(result);
// });

rl.on("close", () => {
  const [M, N, H] = input[0].split(" ").map(Number); // 상자 col M, row N, 상자 높이 H

  const tomato = [];
  for (let i = 0; i < H; i++) {
    t = input
      .slice(i * N + 1, (i + 1) * N + 1)
      .map((line) => line.split(" ").map(Number));
    tomato.push(t);
  }

  const dx = [-1, 0, 1, 0, 0, 0]; // 마지막 두 개는 위, 아래
  const dy = [0, 1, 0, -1, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];

  const queue = [];
  for (let k = 0; k < H; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (tomato[k][i][j] === 1) {
          queue.push([k, i, j]);
        }
      }
    }
  }

  let index = 0;

  // bfs
  while (index < queue.length) {
    const [z, x, y] = queue[index++];
    for (let n = 0; n < 6; n++) {
      const currentZ = z + dz[n];
      const currentX = x + dx[n];
      const currentY = y + dy[n];
      if (
        currentX >= 0 &&
        currentX < N &&
        currentY >= 0 &&
        currentY < M &&
        currentZ >= 0 &&
        currentZ < H &&
        tomato[currentZ][currentX][currentY] === 0
      ) {
        tomato[currentZ][currentX][currentY] = tomato[z][x][y] + 1;
        queue.push([currentZ, currentX, currentY]);
      }
    }
  }

  let result = 0;
  for (const t of tomato.flat().flat()) {
    if (t === 0) {
      console.log(-1);
      return;
    } else if (result < t) {
      result = t;
    }
  }

  console.log(result - 1);
});
