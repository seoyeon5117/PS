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
  const [N, D] = input[0].split(" ").map(Number);

  const roads = Array.from({ length: D + 1 }, () => []);
  for (let i = 1; i <= N; i++) {
    const [s, a, distance] = input[i].split(" ").map(Number);
    if (a <= D) roads[s].push({ to: a, distance: distance }); // D 넘어가면 추가할 필요 없음
  }
  for (let i = 0; i < D; i++) {
    roads[i].push({ to: i + 1, distance: 1 });
  }

  const heap = [];

  function insert(x) {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      let parentIdx = Math.floor((i - 1) / 2);
      if (heap[parentIdx].distance > heap[i].distance) {
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
    const node = heap.pop();

    if (heap.length > 0) {
      let i = 0;
      heap[0] = node;
      while (true) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let smallest = i;
        if (left < heap.length && heap[left].distance < heap[smallest].distance)
          smallest = left;
        if (
          right < heap.length &&
          heap[right].distance < heap[smallest].distance
        )
          smallest = right;
        if (i === smallest) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return root;
  }

  const dist = new Array(D + 1).fill(Infinity);
  dist[0] = 0;
  insert({ to: 0, distance: 0 });

  while (heap.length > 0) {
    const { to: node, distance } = remove();
    if (distance > dist[node]) continue;
    if (roads[node].length > 0) {
      for (const { to: next, distance: d } of roads[node]) {
        if (dist[node] + d < dist[next]) {
          dist[next] = dist[node] + d;
          insert({ to: next, distance: dist[next] });
        }
      }
    }
  }

  console.log(dist[D]);
});
