function solution(a, b, n) {
    let answer = 0;
    let left = 0;
    while(n > 0) {
        n += left;
        left = n % a;
        const cola = Math.floor(n / a) * b;
        answer += cola;
        n = cola;
    }
    return answer;
}