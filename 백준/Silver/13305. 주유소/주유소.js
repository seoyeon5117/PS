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
  const dist = input[1].split(" ").map(BigInt);
  const price = input[2].split(" ").map(BigInt);
  // 제일 싼 곳에서 제일 많이 채우면 됨
  // 현재 도시로부터 기름이 가장 싼 곳의 거리만큼 채우면 됨(없으면 여기서 다 채우기)
  // 그 전 도시의 기름 가격을 기억해두고 그게 더 쌌으면 그걸로 채웠다고 가정하기
  let total = price[0] * dist[0];
  for (let i = 1; i < N - 1; i++) {
    if (price[i] > price[i - 1]) {
      price[i] = price[i - 1];
    }
    total += price[i] * dist[i];
  }
  console.log(total.toString());
});
