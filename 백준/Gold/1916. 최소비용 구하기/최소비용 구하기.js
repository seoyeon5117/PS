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
  const M = +input[1];
  const [start, goal] = input[M + 2].split(" ").map(Number); // 최종 출발점, 도착점
  const city = Array.from({ length: N + 1 }, () => []);
  let s, f, c;
  for (let i = 2; i < M + 2; i++) {
    [s, f, c] = input[i].split(" ").map(Number);
    city[s].push([f, c]);
  }

  const heap = [];
  function push(x) {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent][0] > heap[i][0]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  }

  function pop() {
    if (heap.length === 0) return null;
    const root = heap[0];
    let lastNode = heap.pop();
    if (heap.length > 0) {
      heap[0] = lastNode;
      let i = 0;
      while (true) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let smallest = i;
        if (left < heap.length && heap[left][0] < heap[smallest][0])
          smallest = left;
        if (right < heap.length && heap[right][0] < heap[smallest][0])
          smallest = right;
        if (smallest === i) break;
        [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
        i = smallest;
      }
    }
    return root;
  }

  function dijkstra(graph, start) {
    const dist = {};
    for (const node in graph) dist[node] = Infinity;
    dist[start] = 0; // 시작 노드만 비용 0
    push([0, start]); // 비용, 노드

    while (heap.length > 0) {
      const [cost, node] = pop();
      if (cost > dist[node]) continue; // 이미 더 짧은 경로로 처리된 노드면 스킵

      for (const [next, weight] of graph[node]) {
        const newCost = cost + weight;
        if (newCost < dist[next]) {
          dist[next] = newCost;
          push([newCost, next]);
        }
      }
    }
    return dist;
  }
  console.log(dijkstra(city, start)[goal]);
});
