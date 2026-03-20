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

  const arr = Array.from({ length: N }, () => new Array(N));
  for (let i = 0; i < N; i++) {
    arr[i] = input[i + 1].split(" ").map(Number);
  }

  let min = Infinity;
  const team1 = [];
  const visited = new Array(N).fill(false);

  function combination(length, idx) {
    if (length === N / 2) {
      const team2 = [];
      for (let i = 0; i < N; i++) {
        if (!team1.includes(i)) {
          team2.push(i);
        }
      }

      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < N / 2; i++) {
        const a = team1[i];
        const a2 = team2[i];
        for (let j = 0; j < N / 2; j++) {
          const b = team1[j];
          const b2 = team2[j];
          sum1 += arr[a][b];
          sum2 += arr[a2][b2];
        }
      }

      min = Math.min(Math.abs(sum1 - sum2), min);
      return;
    }
    for (let i = idx + 1; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        team1.push(i);
        combination(length + 1, i);
        team1.pop();
        visited[i] = false;
      }
    }
  }
  combination(0, -1);
  console.log(min);
});
