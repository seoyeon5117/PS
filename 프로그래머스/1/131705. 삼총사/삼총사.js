function solution(number) {
    let len = number.length;
    let count = 0;
    
    function combination(start, picked, sum) {
        if(picked === 3) {
            if(sum === 0) count++;
            return;
        }
        
        for(let i = start; i < len ; i++) {
            combination(i+1, picked + 1,  sum + number[i]);
        }
    }
    
    combination(0, 0, 0);
    
    return count;
}