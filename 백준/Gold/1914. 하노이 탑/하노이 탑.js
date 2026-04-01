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

  const moves = [];
  function hanoi(n, src, dst, aux) {
    if (n === 1) {
      moves.push([src, dst]);
      return;
    }
    hanoi(n - 1, src, aux, dst); // src -> aux로 하나 빼고 다 옮기기
    moves.push([src, dst]);
    hanoi(n - 1, aux, dst, src); // n - 1개에 대해 하노이 재귀
  }

  // 1 -> 3 -> 7 -> 15 -> 31
  // 2^n-1
  if (N > 20) {
    console.log((BigInt(2 ** N) - 1n).toString());
  } else {
    hanoi(N, 1, 3, 2);
    console.log(moves.length + "\n" + moves.map((c) => c.join(" ")).join("\n"));
  }
});
