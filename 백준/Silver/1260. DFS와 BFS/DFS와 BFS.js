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
  const [N, M, V] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let i = 1; i < M + 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  console.log(dfs(graph, V).join(" "));
  console.log(bfs(graph, V).join(" "));

  function dfs(graph, start) {
    const visited = [];
    let needToVisit = [];

    needToVisit.push(start);
    while (needToVisit.length !== 0) {
      const node = needToVisit.shift();
      if (!visited.includes(node)) {
        needToVisit = [...graph[node].sort((a, b) => a - b), ...needToVisit];
        visited.push(node);
      }
    }
    return visited;
  }
  function bfs(graph, start) {
    const visited = [];
    let needToVisit = [];

    needToVisit.push(start);
    while (needToVisit.length !== 0) {
      const node = needToVisit.shift();
      if (!visited.includes(node)) {
        needToVisit = [...needToVisit, ...graph[node].sort((a, b) => a - b)];
        visited.push(node);
      }
    }
    return visited;
  }
});
