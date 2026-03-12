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
  // 각 치킨집만 존재했을때 총 치킨거리 구하기
  // 브루트포스로 M개 고른 경우 모두 계산

  const arr = new Array(N);
  const house = []; // 집 위치 [x,y]
  const chicken = []; // 치킨집 위치 [x,y]
  for (let i = 0; i < N; i++) {
    arr[i] = input[i + 1].split(" ").map(Number);
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1) {
        house.push([i, j]);
      } else if (arr[i][j] === 2) {
        chicken.push([i, j]);
      }
    }
  }

  for (let i = 0; i < chicken.length; i++) {
    let sum = 0;
    const dist = new Array(N).fill(Infinity); // 각 집의 치킨거리
    for (let j = 0; j < house.length; j++) {
      dist[j] = Math.min(
        dist[j],
        Math.abs(chicken[i][0] - house[j][0]) +
          Math.abs(chicken[i][1] - house[j][1]),
      );
      sum += dist[j];
    }
  }

  function getDist(selected) {
    let sum = 0;
    for (const [hx, hy] of house) {
      let dist = Infinity;
      for (const [cx, cy] of selected) {
        dist = Math.min(dist, Math.abs(cx - hx) + Math.abs(cy - hy));
      }
      sum += dist; // 특정 집의 치킨거리 구함
    }
    return sum;
  }

  let min = Infinity;
  function combine(start, selected) {
    if (selected.length === M) {
      min = Math.min(min, getDist(selected));
      return;
    }
    for (let i = start; i < chicken.length; i++) {
      selected.push(chicken[i]);
      combine(i + 1, selected);
      selected.pop();
    }
  }

  combine(0, []);

  console.log(min);
});
