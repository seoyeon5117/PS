function solution(distance, rocks, n) {
    let answer = 0;
    
    rocks.sort((a, b) => a - b);
    rocks.push(distance);
    
    let low = 0;
    let high = distance;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        // 최솟값이 mid일 때 제거한 돌 개수 확인
        let loc = 0; // 위치
        let removed = 0; // 제거한 돌
        for(let i = 0 ; i < rocks.length ; i++) {
            if(rocks[i] - loc < mid) {
                removed++;
            } else {
                loc = rocks[i];
            }
        }
        
        if(removed <= n) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return answer;
}