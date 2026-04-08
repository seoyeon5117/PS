function solution(arr)
{
    const answer = [];
    
    let prev = ""; // 직전
    for(const a of arr) {
        if(a !== prev) answer.push(a);
        prev = a;
    }

    return answer;
}