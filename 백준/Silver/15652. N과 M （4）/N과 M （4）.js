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
  const [N, M] = input[0].split(" ").map(Number);
  const arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  const getNumArr = (arr, num) => {
    if (num === 1) return arr.map((v) => [v]);
    const result = [];
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index);
      const numArr = getNumArr(rest, num - 1);
      const attached = numArr.map((n) => [fixed, ...n]);
      result.push(...attached);
    });

    return result;
  };

  console.log(
    getNumArr(arr, M)
      .map((a) => a.join(" "))
      .join("\n")
  );
});
