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
  const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b); // 오름차순
  const getNumArr = (arr, num, curr) => {
    if (num === 1) return arr.filter((v) => v !== curr).map((v) => [v]);
    const result = [];
    arr.forEach((fixed, _, origin) => {
      const filteredArr = origin.filter((v) => v !== fixed);
      const numArr = getNumArr(filteredArr, num - 1, fixed);
      const attached = numArr.map((n) => [fixed, ...n]);
      result.push(...attached);
    });

    return result;
  };

  console.log(
    getNumArr(numbers, M)
      .map((n) => n.join(" "))
      .join("\n")
  );
});
