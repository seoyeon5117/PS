function solution(sequence, k) {
    const len = sequence.length;
    let answer = [0, len];
    
    let i = 0, j = 0;
    let sum = sequence[0];
    while(i < len && j < len) {
        if(sum === k) {
            if(answer[1] - answer[0] > j - i) {
                answer = [i, j];
            }
            j++;
            sum += sequence[j];
        }
        else if(sum < k) {
            j++;
            sum += sequence[j];
        }
        else {
            if(j > i) {
                i++;
                sum -= sequence[i - 1];
            } else {
                break;
            }
        }
    }
    return answer;
}