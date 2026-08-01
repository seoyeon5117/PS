function solution(maps) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    let idx = 0;
    while(queue.length > idx) {
        const [curX, curY, dist] = queue[idx];
        for(let i = 0 ; i < 4 ; i++) {
            const x = curX + dx[i];
            const y = curY + dy[i];
            if(x === n - 1 && y === m - 1) return dist + 1;
            if(x >= 0 && y >= 0 &&
              x < n && y < m &&
               maps[x][y] === 1 &&
               !visited[x][y]) {
                visited[x][y] = true;
                queue.push([x, y, dist + 1]);
            }
        }
        idx++;
    }
    
    return -1;
}