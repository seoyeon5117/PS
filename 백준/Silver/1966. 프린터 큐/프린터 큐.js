const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === Number(input[0]) * 2 + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const T = Number(input[0]); // 테스트 케이스 수
  const result = [];

  let idx = 1;

  for (let i = 0; i < T; i++) {
    const [N, M] = input[idx].split(" ").map(Number); // 문서의 개수, 몇 번째로 인쇄되었는지 궁금한 문서가 현재 몇 번째에 놓여 있는지
    const documents = input[idx + 1].split(" ").map(Number); // N개 문서의 중요도
    let queue = documents.map((priority, index) => ({ index, priority }));

    let count = 0;

    while (queue.length) {
      const current = queue.shift();
      if (queue.some((v) => v.priority > current.priority)) queue.push(current);
      else {
        count++;
        if (current.index === M) {
          result.push(count);
          break;
        }
      }
    }
    idx += 2;
  }

  console.log(result.join("\n"));
});
