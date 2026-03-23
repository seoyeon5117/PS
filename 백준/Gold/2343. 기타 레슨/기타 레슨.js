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
  const videos = input[1].split(" ").map(Number);

  let max = Math.max(...videos); // 제일 긴 비디오 길이
  let low = max;
  let high = 0;
  for (let i = 0; i < N; i++) {
    high += videos[i];
  }
  let min = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let available = false;
    let total = 0;
    let count = 0; // 블루레이 개수
    let i = 0;
    while (count < M) {
      while (i < N && total + videos[i] <= mid) {
        total += videos[i];
        i++;
      }
      if (i === N) {
        available = true;
        break;
      }
      count++; // 새로운 블루레이
      total = 0; // 블루레이 초기화
    }

    if (available) {
      high = mid - 1; // 더 작은 블루레이 크기로 계산
      min = mid;
    } else {
      low = mid + 1;
    }
  }

  console.log(min);
});
