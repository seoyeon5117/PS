function solution(s) {
    let answer = 0;
    const len = s.length;
    let cnt = 0;
    let word;
    
    for(let i = 0 ; i < len ; i++) {
        if(cnt === 0) {
            cnt++;
            word = s[i];
            answer++;
        } else {
            if(s[i] === word) cnt++;
            else cnt--;
        }
    }
    
    return answer;
}