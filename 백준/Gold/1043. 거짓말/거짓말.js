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
  const [N, M] = input[0].split(" ").map(Number);
  const arr = [];
  const person = new Array(N + 1).fill(false); // 진실을 아는 사람: true

  input[1].split(" ").forEach((c, idx) => {
    if (idx !== 0) arr.push(+c);
  });

  // 그래프 그려서 진실 감염
  const graph = Array.from({ length: N + 1 }, () => []);
  const party = Array.from({ length: M }, () => []);

  let total = M;

  // 파티 돌면서 사람 연결관계 그래프 추가
  for (let i = 0; i < M; i++) {
    let cnt = 0;
    input[i + 2].split(" ").forEach((c, idx) => {
      if (idx === 0) cnt = Number(c);
      else party[i].push(Number(c));
    });

    for (let j = 0; j < cnt; j++) {
      for (const p of party[i]) {
        if (p !== party[i][j]) {
          graph[party[i][j]].push(p);
        }
      }
    }
  }

  function loop(idx) {
    if (person[idx]) return; // 이미 감염됐으면 더 안봐도 됨

    person[idx] = true;
    for (const g of graph[idx]) {
      loop(g);
    }
  }

  for (const a of arr) {
    loop(a);
  }

  const arr1 = [];
  person.forEach((p, idx) => {
    if (p === true) {
      arr1.push(idx);
    }
  });

  // 진실을 알고 있는 사람으로 감염
  for (let j = 0; j < M; j++) {
    for (const a of arr1) {
      if (party[j].includes(a)) {
        total--;
        break;
      }
    }
  }

  console.log(total);
});
