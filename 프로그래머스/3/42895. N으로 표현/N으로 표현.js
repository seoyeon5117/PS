function solution(N, number) {
    let answer = 0;
    const dp = Array.from({ length: 9 }, () => new Set());
    
    for(let i = 1 ; i <= 8 ; i++) {
        dp[i].add(Number(String(N).repeat(i)));
        
        for(let j = 1 ; j < i ; j++) {
            let k = i - j;
            for(const a of dp[j]) {
                for(const b of dp[k]) {
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(a * b);
                    dp[i].add(Math.floor(a / b));
                }
            }
        }
        
        if(dp[i].has(number)) return i;
    }
    
    
    return -1;
}