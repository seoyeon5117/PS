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
  const arr = input.slice(1).map(Number);
  const heap = [];

  function insert(value) {
    heap.push(value);
    let i = heap.length - 1;
    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (heap[parentIdx] < heap[i]) {
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
        let biggest = i;
        if (heap.length > left && heap[left] > heap[biggest]) biggest = left;
        if (heap.length > right && heap[right] > heap[biggest]) biggest = right;
        if (i === biggest) break;
        [heap[biggest], heap[i]] = [heap[i], heap[biggest]];

        i = biggest;
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
