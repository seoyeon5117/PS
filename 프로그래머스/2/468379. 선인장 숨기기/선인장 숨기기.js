function solution(m, n, h, w, drops) {
    const rain = new Array(m*n).fill(Infinity);
    let time = 1;
    for(const drop of drops) {
        const [x , y] = drop;
        rain[x * n + y] = time;
        time++;
    }
    
    const newN = n - w + 1
    const rowMin = new Array(m * newN).fill(0); // 크기: 슬라이딩 윈도우 총 개수, 각 슬라이딩 윈도우의 최솟값 저장
    
    // 가로 슬라이딩
    for(let r = 0 ; r < m ; r++) {
        const dq = [];
        for(let c = 0 ; c < n ; c++) {
            while(dq.length > 0 && rain[r * n + dq[dq.length - 1]] >= rain[r * n + c]) {
                dq.pop();
            }
            dq.push(c);
            if(dq[0] <= c - w) dq.shift(); // 윈도우 크기 넘어감
            if(c >= w - 1) {
                rowMin[r * newN + (c - w + 1)] = rain[r * n + dq[0]]; // 최솟값 저장
            }
        }
    }
    
    // 세로 슬라이딩
    let bestTime = -1;
    let bestR = 0;
    let bestC = 0;
    
    for(let c = 0 ; c < newN ; c++) {
        const dq = [];
        for(let r = 0 ; r < m ; r++) {
            while(dq.length > 0 && rowMin[dq[dq.length - 1] * newN + c] >= rowMin[r * newN + c]) {
                dq.pop();
            }
            dq.push(r);
            if(dq[0] <= r - h) dq.shift(); // 윈도우 크기 넘어감
            if(r >= h - 1) {
                let time = rowMin[dq[0] * newN + c]; // 비가 가장 먼저 오는 시간
                let startR = r - h + 1; // 세로 윈도우의 시작 행 번호
                if(time > bestTime ||
                   (time === bestTime && startR < bestR) ||
                   (time === bestTime && startR === bestR && c < bestC)) {
                   bestTime = time;
                   bestR = startR;
                   bestC = c;
                }
            }
        }
    }
    
    return [bestR, bestC];
}