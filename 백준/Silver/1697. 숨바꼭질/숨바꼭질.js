const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ");
let [n, k] = input.map(Number);

function BFS(n, k) {
    const visited = new Array(100001).fill(false); // 방문한 노드 추적
    let queue = []; // 큐 초기화 및 시작 노드 큐에 추가

    queue.push([n, 0]);
    visited[n] = true;

    while(queue.length > 0) {
        const [currentPosition, currentTime] = queue.shift();

        if (currentPosition === k) {
            return currentTime;
        }

        const nextPositions = [currentPosition-1, currentPosition+1, currentPosition*2]

        for(const nextPosition of nextPositions) {
            // 방문하지 않은 노드 추가
            if(nextPosition >= 0 && nextPosition <= 100000 && !visited[nextPosition]) {
                visited[nextPosition] = true;
                queue.push([nextPosition, currentTime+1]);
            }
        }
    }
}
console.log(BFS(n, k));