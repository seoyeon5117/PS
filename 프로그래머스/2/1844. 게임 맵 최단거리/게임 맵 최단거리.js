function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const visited = Array.from({ length : n }, () => new Array(m).fill(false));
    
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    let idx = 0;
    while(queue.length > idx) {
        const [x, y, dist] = queue[idx++];
        for(let i = 0 ; i < 4 ; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && ny >= 0 &&
               nx < n && ny < m &&
               maps[nx][ny] === 1 &&
               !visited[nx][ny]) {
                visited[nx][ny] = true;
                if(nx === n - 1 && ny === m - 1) return dist + 1;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    return -1;
}