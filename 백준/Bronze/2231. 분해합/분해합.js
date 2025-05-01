const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line.trim();
  rl.close();
});

rl.on("close", () => {
  console.log(constructor(input));

  function constructor(input) {
    const digit = input.length; // 자리수
    const N = Number(input); // 주어진 수
    const min = N - digit * 9;

    for (let i = min; i < N; i++) {
      let result = i;
      const nums = i.toString().split("").map(Number);
      for (const v of nums) {
        result += v;
      }
      if (result === N) {
        return i;
      }
    }
    return 0;
  }
});
