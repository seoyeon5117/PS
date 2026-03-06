const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
});

// 첫째 줄에 연산의 개수 N(1 ≤ N ≤ 100,000)이 주어진다.
// 다음 N개의 줄에는 연산에 대한 정보를 나타내는 정수 x가 주어진다.
// 만약 x가 자연수라면 배열에 x라는 값을 넣는(추가하는) 연산이고,
// x가 0이라면 배열에서 가장 작은 값을 출력하고 그 값을 배열에서 제거하는 경우이다.
// x는 231보다 작은 자연수 또는 0이고, 음의 정수는 입력으로 주어지지 않는다.

rl.on("close", () => {
  const N = +input[0];
  const arr = input.slice(1).map(Number);
  const heap = [];

  function insert(x) {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (heap[parentIdx] > heap[i]) {
        [heap[parentIdx], heap[i]] = [heap[i], heap[parentIdx]];
        i = parentIdx;
      } else {
        break;
      }
    }
  }

  function remove() {
    if (heap.length === 0) return 0;
    const root = heap[0];
    const lastNode = heap.pop();
    if (heap.length > 0) {
      heap[0] = lastNode;
      let i = 0;
      while (true) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let smallest = i;
        if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
        if (right < heap.length && heap[right] < heap[smallest])
          smallest = right;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return root;
  }

  const result = [];

  for (const a of arr) {
    if (a === 0) result.push(remove());
    else insert(a);
  }

  console.log(result.join("\n"));
});
