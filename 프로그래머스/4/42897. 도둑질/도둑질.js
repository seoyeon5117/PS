function solution(money) {
    const N = money.length;
    const dp = new Array(N).fill(0);
    
    let answer1 = 0, answer2 = 0;
    
    dp[0] = money[0];
    dp[1] = Math.max(dp[0], money[1]);
    dp[2] = Math.max(money[1], dp[0] + money[2]);
    for(let i = 3 ; i < N - 1 ; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + money[i], dp[i-3] + money[i]);
    }
    answer1 = dp[N-2];
    
    dp[0] = 0;
    dp[1] = Math.max(dp[0], money[1]);
    dp[2] = Math.max(money[1], dp[0] + money[2]);
    for(let i = 3 ; i < N - 1 ; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + money[i], dp[i-3] + money[i]);
    }
    dp[N-1] = Math.max(dp[N-2], dp[N-3] + money[N-1], dp[N-4] + money[N-1]);
    answer2 = dp[N-1]
    
    return Math.max(answer1, answer2);
}