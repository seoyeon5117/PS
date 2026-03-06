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
  const heap = [];

  function insert(x) {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent] > heap[i]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
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

  for (let i = 1; i <= N; i++) {
    if (+input[i] === 0) {
      result.push(remove());
    } else {
      insert(+input[i]);
    }
  }
  console.log(result.join("\n"));
});
