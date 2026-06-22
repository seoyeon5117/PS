function solution(maps) {
    var answer = [];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const lenY = maps.length;
    const lenX = maps[0].length;
    const visited = Array.from({ length: lenY }, () => new Array(lenX).fill(false));
    
    for(let y = 0 ; y < lenY ; y++) {
        for(let x = 0 ; x < lenX ; x++) {
            let food = 0;
            let idx = 0;
            const queue = [];
            
            if(maps[y][x] !== 'X' && !visited[y][x]) {
                queue.push([y, x]);
                
                while(idx < queue.length) {
                    const [cy, cx] = queue[idx];
                    food += +maps[cy][cx];
                    visited[cy][cx] = true;
                    
                    for(let i = 0 ; i < 4 ; i++) {
                        const nx = cx + dx[i];
                        const ny = cy + dy[i];

                        if(nx >= 0 && nx < lenX &&
                           ny >= 0 && ny < lenY &&
                           maps[ny][nx] !== 'X' &&
                          !visited[ny][nx]) {
                            visited[ny][nx] = true;
                            queue.push([ny, nx]);
                        }
                    }
                    idx++;
                }
                answer.push(food);
            }
        }
    }
    
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}