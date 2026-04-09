function solution(name, yearning, photo) {
    let answer = [];
    
    for(const p of photo) {
        let sum = 0;
        for(const person of p) {
            name.forEach((n, idx) => {
                if(n === person) {
                    sum += yearning[idx];
                }
            });
        }
        answer.push(sum);
    }
    
    return answer;
}