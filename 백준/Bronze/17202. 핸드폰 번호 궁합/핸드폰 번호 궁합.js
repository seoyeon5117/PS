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
  const arr1 = input[0].split("").map(Number);
  const arr2 = input[1].split("").map(Number);

  const arr = [];

  for (let i = 0; i < 8; i++) {
    arr.push(arr1[i], arr2[i]);
  }

  while (arr.length > 2) {
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = (arr[i] + arr[i + 1]) % 10;
    }
    arr.pop();
  }

  console.log(arr.join(""));
});
