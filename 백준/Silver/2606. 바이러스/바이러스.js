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
  const N = +input[0]; // 컴퓨터의 수
  const C = +input[1]; // 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수

  const graph = Array.from({ length: N + 1 }, () => []); // graph[0]은 안 쓸 예정
  for (let i = 2; i < C + 2; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  console.log(bfs(graph, 1).length - 1);

  function bfs(graph, start) {
    const visited = [];
    let needToVisit = [];

    needToVisit.push(start);

    while (needToVisit.length !== 0) {
      const node = needToVisit.shift();
      if (!visited.includes(node)) {
        needToVisit = [...graph[node], ...needToVisit];
        visited.push(node);
      }
    }

    return visited;
  }
});
