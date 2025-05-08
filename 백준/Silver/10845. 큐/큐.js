const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === Number(input[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = Number(input[0]);
  const command = [];
  for (let i = 0; i < N; i++) {
    command[i] = input[i + 1].split(" ");
  }

  const result = [];
  const queue = [];
  let front = 0;
  for (let i = 0; i < N; i++) {
    if (command[i][0] === "push") {
      queue.push(Number(command[i][1]));
    } else if (command[i][0] === "pop") {
      if (!queue[front]) {
        // 큐에 들어있는 정수가 없는 경우에는 -1을 출력
        result.push(-1);
      } else {
        result.push(queue[front]); // 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력
        front++;
      }
    } else if (command[i][0] === "size") {
      result.push(queue.length - front); // 큐에 들어있는 정수의 개수를 출력
    } else if (command[i][0] === "empty") {
      if (!queue[front]) {
        // 큐가 비어있으면 1
        result.push(1);
      } else {
        // 아니면 0을 출력
        result.push(0);
      }
    } else if (command[i][0] === "front") {
      if (!queue[front]) {
        // 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력
        result.push(-1);
      } else {
        // 큐의 가장 앞에 있는 정수를 출력
        result.push(queue[front]);
      }
    } else if (command[i][0] === "back") {
      if (!queue[front]) {
        // 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력
        result.push(-1);
      } else {
        // 큐의 가장 뒤에 있는 정수를 출력
        result.push(queue[queue.length - 1]);
      }
    }
  }
  console.log(result.join("\n"));
});
