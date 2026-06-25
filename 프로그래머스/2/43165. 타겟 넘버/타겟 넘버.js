function solution(numbers, target) {
    let result = 0;
    
    function dfs(idx, sum) {
        if(idx + 1 === numbers.length) {
            if(sum === target) result++;
            return;
        }
        dfs(idx + 1, sum + numbers[idx+1]);
        dfs(idx + 1, sum - numbers[idx+1]);
        
    }
    
    dfs(0, numbers[0]);
    dfs(0, -numbers[0]);
    
    return result;
}