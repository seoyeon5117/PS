const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// BFS
rl.on("close", () => {
  const T = +input[0];
  const answer = [];

  for (let t = 1; t <= T; t++) {
    const [A, B] = input[t].split(" ").map(Number);
    const visited = new Array(10000).fill(false);
    const queue = [];

    queue.push({ num: A, path: "" });
    visited[A] = true;

    let index = 0;
    while (queue.length > index) {
      const { num, path } = queue[index++];
      if (num === B) {
        answer.push(path);
        break;
      }

      // D: n을 두 배로 바꾼다. 결과 값이 9999 보다 큰 경우에는 10000 으로 나눈 나머지를 취한다. 그 결과 값(2n mod 10000)을 레지스터에 저장한다.
      // S: n에서 1 을 뺀 결과 n-1을 레지스터에 저장한다. n이 0 이라면 9999 가 대신 레지스터에 저장된다.
      // L: n의 각 자릿수를 왼편으로 회전시켜 그 결과를 레지스터에 저장한다.
      // R: n의 각 자릿수를 오른편으로 회전시켜 그 결과를 레지스터에 저장한다.
      const cmd = [
        { num: (num * 2) % 10000, path: path + "D" },
        { num: (num + 9999) % 10000, path: path + "S" },
        {
          num: (num % 1000) * 10 + Math.floor(num / 1000),
          path: path + "L",
        },
        { num: Math.floor(num / 10) + (num % 10) * 1000, path: path + "R" },
      ];

      for (let i = 0; i < 4; i++) {
        const num = cmd[i].num;
        if (!visited[num]) {
          visited[num] = true;
          queue.push({ num: num, path: cmd[i].path });
        }
      }
    }
  }

  console.log(answer.join("\n"));
});
