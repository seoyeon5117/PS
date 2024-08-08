function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    let stack = [];
    
    for(let i = 0 ; i < numbers.length ; i++) {
        // 스택이 비어있지 않고 현재 인덱스(=맨 위의 스택)의 숫자가 현재 숫자보다 작으면 뒷 큰수는 현재 숫자
        while (stack.length && numbers[i] > numbers[stack[stack.length - 1]]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    return answer;
}