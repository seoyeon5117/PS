function solution(s) {
    const answer = [];
    const arr = s.split("");
    const map = new Map();
    
    for(let i = 0 ; i < arr.length ; i++) {
        answer.push(map.has(arr[i]) ? i - map.get(arr[i]) : -1);
        map.set(arr[i], i);
    }
    return answer;
}