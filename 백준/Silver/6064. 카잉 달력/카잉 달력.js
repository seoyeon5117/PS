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
  const testcase = +input[0];
  const result = [];
  for (let t = 1; t <= testcase; t++) {
    const [M, N, x, y] = input[t].split(" ").map(Number);

    // 최대공약수
    function gdc(a, b) {
      return b === 0 ? a : gdc(b, a % b);
    }

    // 최소공배수
    function lcm(a, b) {
      return (a * b) / gdc(a, b);
    }

    let max = lcm(M, N);

    let m = 0;
    while (m >= 0) {
      let year = M * m + x;
      if (year > max) {
        result.push(-1);
        break;
      } else if ((year - y) % N === 0) {
        result.push(year);
        break;
      }
      m++;
    }
  }
  console.log(result.join("\n"));
});
