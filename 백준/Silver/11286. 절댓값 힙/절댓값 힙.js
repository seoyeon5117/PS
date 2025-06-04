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
  const arr = input.slice(1).map(Number);
  const heap = [];

  function compare(x, y) {
    const absA = Math.abs(x);
    const absB = Math.abs(y);

    if (absA !== absB) return absA - absB;
    return x - y;
  }

  function insert(value) {
    heap.push(value);
    let i = heap.length - 1;
    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (compare(heap[i], heap[parentIdx]) < 0) {
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
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let smallest = i;
        if (heap.length > left && compare(heap[left], heap[smallest]) < 0) {
          smallest = left;
        }
        if (heap.length > right && compare(heap[right], heap[smallest]) < 0) {
          smallest = right;
        }
        if (i === smallest) break;
        [heap[smallest], heap[i]] = [heap[i], heap[smallest]];

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
