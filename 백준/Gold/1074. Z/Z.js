const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 한수는 크기가 2N × 2N인 2차원 배열을 Z모양으로 탐색하려고 한다. 예를 들어, 2×2배열을 왼쪽 위칸, 오른쪽 위칸, 왼쪽 아래칸, 오른쪽 아래칸 순서대로 방문하면 Z모양이다.

// N > 1인 경우, 배열을 크기가 2N-1 × 2N-1로 4등분 한 후에 재귀적으로 순서대로 방문한다.

// N이 주어졌을 때, r행 c열을 몇 번째로 방문하는지 출력하는 프로그램을 작성하시오.

// 다음은 N=3일 때의 예이다.

// 입력
// 첫째 줄에 정수 N, r, c가 주어진다.

// 출력
// r행 c열을 몇 번째로 방문했는지 출력한다.

// 제한
// 1 ≤ N ≤ 15
// 0 ≤ r, c < 2N

rl.on("close", () => {
  let [N, r, c] = input[0].split(" ").map((c) => Number(c));

  let result = 0;
  while (N > 0) {
    let div = 2 ** N / 2;

    if (r < div && c < div) {
      // 2사분면
      result += 0;
    } else if (r < div && c >= div) {
      // 1사분면
      result += div ** 2 * 1;
      c %= div;
    } else if (r >= div && c < div) {
      // 3사분면
      result += div ** 2 * 2;
      r %= div;
    } else {
      // 4사분면
      result += div ** 2 * 3;
      c %= div;
      r %= div;
    }
    N -= 1;
  }

  console.log(result);
});
