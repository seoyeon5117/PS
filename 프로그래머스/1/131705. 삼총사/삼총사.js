function solution(number) {
    let count = 0;
    
    number.sort((a, b) => a - b);
    const len = number.length;
    
    for(let i = 0 ; i < len - 2; i++) {
        let sum = 0;
        for(let j = i + 1 ; j < len - 1; j++) {
            for(let k = j + 1 ; k < len; k++) {
                if(number[i] + number[j] + number[k] === 0) count++;
            }
        }
    }
    
    return count;
}