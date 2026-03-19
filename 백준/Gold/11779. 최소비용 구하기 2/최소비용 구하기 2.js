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
  const n = +input[0];
  const m = +input[1];
  const [start, arrive] = input[m + 2].split(" ").map(Number);

  // 최소힙
  const heap = [];

  function insert(x) {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (heap[parentIdx][0] > heap[i][0]) {
        [heap[parentIdx], heap[i]] = [heap[i], heap[parentIdx]];
        i = parentIdx;
      } else {
        break;
      }
    }
  }

  function remove() {
    if (heap.length === 0) return;
    const root = heap[0];
    const lastNode = heap.pop();

    if (heap.length > 0) {
      heap[0] = lastNode;
      let i = 0;
      while (true) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let smallest = i;
        if (heap.length > left && heap[left][0] < heap[smallest][0])
          smallest = left;
        if (heap.length > right && heap[right][0] < heap[smallest][0])
          smallest = right;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return root;
  }

  // 그래프
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [s, a, cost] = input[i + 2].split(" ").map(Number);
    graph[s].push([cost, a]);
  }

  const dist = new Array(n + 1).fill(Infinity); // start부터 idx까지의 최소 비용
  const prev = new Array(n + 1).fill(-1); // 경로

  dist[start] = 0; // 출발지부터 출발지까지는 0
  insert([0, start]);

  while (heap.length > 0) {
    const [cost, node] = remove();
    if (cost > dist[node]) continue;
    for (const [c, next] of graph[node]) {
      if (c + dist[node] < dist[next]) {
        dist[next] = dist[node] + c;
        prev[next] = node;
        insert([dist[next], next]);
      }
    }
  }

  const result = [];
  for (let i = arrive; i !== -1; i = prev[i]) {
    result.push(i);
  }

  console.log(
    dist[arrive] + "\n" + result.length + "\n" + result.reverse().join(" "),
  );
});
