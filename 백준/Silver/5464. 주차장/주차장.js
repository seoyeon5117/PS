const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 반드시 표준 입력으로부터 다음의 데이터를 읽어야 한다.

// 첫 번째 줄에는 정수 N과 M이 빈칸을 사이에 두고 주어진다.
// 그 다음 N개의 줄에는 주차 공간들의 단위 무게당 요금을 나타내는 정수들이 주어진다. 그 중 s번째 줄에는 주차 공간 s의 단위 무게당 요금 rates가 들어있다.
// 그 다음 M개의 줄에는 차량들의 무게를 나타내는 정수들이 주어진다. 차량들은 1 부터 M 까지 번호로 구분되고, 이 번호는 출입 순서와는 상관없다. 이 M개의 줄 중 k번째 줄에는 차량 k의 무게를 나타내는 정수 weights가 들어있다.
// 그 다음 2*M 개의 줄에는 차량들의 주차장 출입 순서를 나타내는 정수들이 한 줄에 하나씩 주어진다.
// 양의 정수 i는 차량 i가 주차장에 들어오는 것을 의미하고, 음의 정수 -i는 차량 i가 주차장에서 나가는 것을 의미한다. 주차장에 들어오지 않은 차량이 주차장에서 나가는 경우는 없다.
// 1 번부터 M 번까지 모든 차량은 정확하게 한 번씩 주차장에 들어오고, 한 번씩 주차장에서 나간다. 또한 입구에서 대기 중인 차량이 주차를 하지 못하고 나가는 경우는 없다.
// 1 ≤ N ≤ 100 주차 공간의 수
// 1 ≤ M ≤ 2,000 차량의 수
// 1 ≤ rates ≤ 100 주차 공간 s의 단위 무게당 요금
// 1 ≤ weights ≤ 10,000 차량 k의 무게

rl.on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  const rates = new Array(N);
  const weights = new Array(M);
  const arr = [];

  for (let i = 0; i < N; i++) {
    rates[i] = +input[i + 1];
  }
  for (let i = 0; i < M; i++) {
    weights[i] = +input[i + N + 1];
  }

  let sum = 0;
  const parkedAt = new Array(M); // 주차 위치
  const available = new Array(N);
  for (let i = 0; i < N; i++) {
    available[i] = N - i - 1;
  }
  const queue = []; // 대기 중인 차량들
  let idx = 0;
  for (let i = 0; i < M * 2; i++) {
    const event = +input[i + N + M + 1];
    const car = Math.abs(event) - 1; // 차 번호

    if (event > 0) {
      // 입차
      queue.push(car);
    } else {
      // 출차
      available.push(parkedAt[car]);
      available.sort((a, b) => b - a);
    }

    while (queue.length > idx && available.length > 0) {
      const car = queue[idx];
      const a = available.pop(); // 번호가 가장 작은 주차 공간
      sum += rates[a] * weights[car];
      parkedAt[car] = a; // car번 차가 r에 주차
      idx++;
    }
  }

  console.log(sum);
});
