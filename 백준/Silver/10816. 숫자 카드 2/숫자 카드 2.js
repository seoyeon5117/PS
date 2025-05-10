const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 4) {
    rl.close();
  }
});

rl.on("close", () => {
  const N = Number(input[0]);
  const M = Number(input[2]);
  const cards = input[1].split(" ").map(Number);
  cards.sort((a, b) => a - b); //카드 오름차순 정렬

  const numbers = input[3].split(" ").map(Number);

  const result = numbers.map(
    (num) => upperBound(cards, num) - lowerBound(cards, num) + 1
  );

  console.log(result.join(" "));

  // target이 처음 나오는 위치
  function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) right = mid;
      else left = mid + 1;
    }
    return left;
  }

  // target이 마지막으로 나오는 위치
  function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] > target) right = mid;
      else left = mid + 1;
    }
    return left - 1;
  }
});