const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.split(" ").map(Number);
  rl.close();
});

rl.on("close", () => {
  input.sort((a, b) => a - b);
  const [N, M] = input.map(Number);

  // 최대 공약수
  for (let i = N; i > 0; i--) {
    if (N % i === 0 && M % i === 0) {
      console.log(i);
      i = 0;
    }
  }

  // 최소 공배수
  for (let i = 1; i > 0; i++) {
    if ((M * i) % N === 0) {
      console.log(M * i);
      i = -1;
    }
  }
});
