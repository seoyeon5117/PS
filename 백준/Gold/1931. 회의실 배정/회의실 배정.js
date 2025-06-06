const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 첫째 줄에 회의의 수 N(1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N+1 줄까지 각 회의의 정보가 주어지는데 이것은 공백을 사이에 두고 회의의 시작시간과 끝나는 시간이 주어진다.
// 시작 시간과 끝나는 시간은 2^31-1보다 작거나 같은 자연수 또는 0이다.
// 시간 순으로 나열 후 끝나는 시간이 빠른 회의부터! + 시간도 짧아야함
rl.on("close", () => {
  const N = +input[0];
  const meeting = input.slice(1).map((line) => line.split(" ").map(Number));

  meeting.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0]; // 오름차순
    }
  });

  let count = 1; // meeting[0] 추가했다고 가정
  let index = 0; // 직전에 몇 번째 회의 추가했는지 기록
  for (let i = 1; i < N; i++) {
    if (meeting[index][1] <= meeting[i][0]) {
      // 회의 시작 시간이 직전 회의 끝나는 시간보다 늦거나 같음 -> 회의 가능, 같은 시작 시간 중 제일 빨리 끝나는 애니까 일단 추가
      count++;
      index = i;
    } else {
      if (meeting[index][1] > meeting[i][1]) {
        // 회의 끝나는 시간이 직전 회의 끝나는 시간보다 빠름 -> 더 늦게 시작하긴 했지만 더 빨리 끝남 -> 직전 회의를 해당 회의로 대체
        index = i;
      }
    }
  }

  console.log(count);
});
