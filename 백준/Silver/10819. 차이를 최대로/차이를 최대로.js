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
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const idx = Math.ceil(N / 2);
  const arr1 = arr.slice(0, idx);
  const arr2 = arr.slice(idx).reverse();

  const array = [];

  for (let i = 0; i < idx - 1; i++) {
    array.push(arr1[i], arr2[i]);
  }
  array.push(arr1[idx - 1]);
  if (arr2[idx - 1]) {
    array.push(arr2[idx - 1]);
  }

  let result = 0;
  let min = Infinity;
  for (let i = 0; i < N - 1; i++) {
    const diff = Math.abs(array[i] - array[i + 1]);
    if (min > diff) {
      min = diff;
    }
    result += diff;
  }
  const diff = Math.abs(array[0] - array[N - 1]);
  if (min > diff) {
    min = diff;
  }
  result += diff;

  console.log(result - min);
});
