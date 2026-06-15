function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 1 ; i <= number ; i++) {
        let cnt = 0;
        for(let j = 1 ; j <= Math.sqrt(i) ; j++) {
            if(i % j == 0) {
                cnt++;
                if(j**2 !== i) cnt++;
            }
        }
        if(cnt > limit) answer += power;
        else answer += cnt;
    }
    return answer;
}