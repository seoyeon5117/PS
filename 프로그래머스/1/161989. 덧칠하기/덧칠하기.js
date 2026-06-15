function solution(n, m, section) {
    let answer = 0;
    let end = 0;
    let i = 0;
    while(i < section.length) {
        if(section[i] > end) {
            end = section[i] + m - 1; // 여기까지 칠해짐 
            answer++;
        }
        i++;
    }
    return answer;
}