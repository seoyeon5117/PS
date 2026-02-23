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
  const [N, M] = input[0].split(" ").map((c) => Number(c));
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [n, m] = input[i].split(" ").map((c) => Number(c));
    graph[n].push(m);
    graph[m].push(n);
  }

  let count = 0;

  const visited = new Set();
  function dfs(node) {
    visited.add(node);

    for (const next of graph[node]) {
      if (!visited.has(next)) {
        dfs(next);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    const size = visited.size;
    dfs(i);
    if (size < visited.size) {
      count++;
    }
  }

  console.log(count);
});
