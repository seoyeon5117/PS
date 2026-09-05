function solution(maps) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    let idx = 0;
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    while(idx < queue.length) {
        const [x, y, dist] = queue[idx++];
        for(let i = 0 ; i < 4 ; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx >= 0 && nx < n &&
               ny >= 0 && ny < m &&
               maps[nx][ny] === 1 &&
               !visited[nx][ny]) {
                visited[nx][ny] = true;
                if(nx === n-1 && ny === m-1) return dist + 1;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    console.log(queue);
    
    return -1;
}