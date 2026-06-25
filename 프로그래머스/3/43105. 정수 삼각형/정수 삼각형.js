function solution(triangle) {
    let answer = 0;
    const height = triangle.length;
    const dp = Array.from({length : height}, () => new Array(height));
    dp[0][0] = triangle[0][0];
    
    for(let i = 1 ; i < height ; i++) {
        for(let j = 0 ; j < i + 1 ; j++) {
            if(j === 0) {
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            } else if(j === i) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
            }
        }
    }
    
    for(let k = 0 ; k < height ; k++) {
        answer = Math.max(answer, dp[height - 1][k]);
    }
    
    return answer;
}