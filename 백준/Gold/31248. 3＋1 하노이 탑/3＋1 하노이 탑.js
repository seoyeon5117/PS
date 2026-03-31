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
    } else {
      hanoi(n - 1, src, aux, dst);
      moves.push([src, dst]);
      hanoi(n - 1, aux, dst, src);
    }
  }

  function dHanoi(n, src, dst, aux1, aux2) {
    if (n === 1) {
      moves.push([src, dst]);
      return;
    }
    if (n === 2) {
      moves.push([src, aux2]);
      moves.push([src, dst]);
      moves.push([aux2, dst]);
      return;
    }

    // 상위 n-2개 보조 막대1로 이동
    hanoi(n - 2, src, aux1, aux2);

    // 하위 2개 D로 이동
    moves.push([src, aux2]);
    moves.push([src, dst]);
    moves.push([aux2, dst]);

    dHanoi(n - 2, aux1, dst, src, aux2); // 보조 막대1에서 D로 이동
  }

  dHanoi(N, "A", "D", "B", "C");

  console.log(moves.length);
  console.log(moves.map((c) => c.join(" ")).join("\n"));
});
