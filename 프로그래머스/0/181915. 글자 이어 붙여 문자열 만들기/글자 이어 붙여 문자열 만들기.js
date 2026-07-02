function solution(my_string, index_list) {
    let answer = '';
    const arr = my_string.split("");
    for(let i = 0 ; i < index_list.length ; i++) {
        answer += my_string[index_list[i]];
    }
    return answer;
}