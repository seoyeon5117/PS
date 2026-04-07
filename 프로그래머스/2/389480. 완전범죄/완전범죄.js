function solution(info, n, m) {
    let dp = new Array(n).fill(Infinity);
    
    dp[0] = 0;
    
    for(const [ta, tb] of info) {
        const next = new Array(n).fill(Infinity);
        
        for(let a = 0 ; a < n ; a++) {
            if(dp[a] === Infinity) continue;
            const b = dp[a]; // A흔적이 a개일 때, 가능한 최소 B흔적
            
            const na = a + ta;
            if(na < n) {
                next[na] = Math.min(next[na], b);
            }
            
            const nb = b + tb;
            if(nb < m) {
                next[a] = Math.min(next[a], nb);
            }
        }
        
        dp = next;
    }
    
    for(let a = 0 ; a < n ; a++) {
        if(dp[a] !== Infinity) return a;
    }
    
    return -1;
}