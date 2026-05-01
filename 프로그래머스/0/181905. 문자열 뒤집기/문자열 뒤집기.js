function solution(my_string, s, e) {
    let answer = my_string.split("");
    
    const arr = my_string.slice(s, e + 1).split("").reverse();
    for(let i = 0; i < e + 1 - s; i++) {
        answer[s + i] = arr[i];
    }
    return answer.join("");
}