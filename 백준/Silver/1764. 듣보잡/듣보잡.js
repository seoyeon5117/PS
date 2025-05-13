const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let N, M;

// 첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다.
// 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다.
// 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.

// 듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 1) {
    [N, M] = input[0].split(" ").map(Number);
  }
  if (input.length === N + M + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const neverHeardList = input.slice(1, N + 1).sort();
  const result = [];

  const neverSeen = new Set(input.slice(N + 1));

  for (let i = 0; i < N; i++) {
    if (neverSeen.has(neverHeardList[i])) result.push(neverHeardList[i]);
  }

  console.log(result.length);
  console.log(result.join("\n"));
});
