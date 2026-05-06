function solution(places) {
    const answer = [];
    let result = 1;
    
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    for(let i = 0; i < 5; i++) {
        const everyP = [];
        const newPlaces = [];
        
        for(let j = 0; j < 5; j++) {
            newPlaces.push(places[i][j].split(""));
        }
        
        for(let j = 0; j < 5; j++) {
            for(let k = 0; k < 5; k++) {
                if(newPlaces[j][k] === 'P') everyP.push([j, k]);
            }
        }
        
        for(const p of everyP) {
            const queue = [];
            let idx = 0;
            const visited = Array.from({ length : 25 }, () => new Array(25).fill(false));
            const [a, b] = p;
            queue.push([a, b, 0]);
            visited[a][b] = true;
            console.log(a, b);
            if(result === 1) validateP(newPlaces, queue, idx, visited);
        }
        answer.push(result);
        result = 1; // 초기화
    }

    
    function validateP(newPlaces, queue, idx, visited) {
        while(queue.length > idx) {
            let [i, j, cnt] = queue[idx++];
            if(cnt === 2) break;
            let curX = i;
            let curY = j;
            for(let k = 0; k < 4; k++) {
                const nextX = curX + dx[k];
                const nextY = curY + dy[k];
                if(nextX >= 0 && nextX < 5 &&
                   nextY >= 0 && nextY < 5 &&
                   !visited[nextX][nextY]
                  ) {
                    visited[nextX][nextY] = true;
                    console.log(newPlaces[nextX][nextY], nextX, nextY);
                    if(newPlaces[nextX][nextY] === 'P') {
                        result = 0;
                        return;
                    } else if(newPlaces[nextX][nextY] === 'O') {
                        queue.push([nextX, nextY, cnt + 1]);
                    }
                    // 'X'이면 더 볼 필요 없음
                }
            }
        }
    }
    
    return answer;
}
