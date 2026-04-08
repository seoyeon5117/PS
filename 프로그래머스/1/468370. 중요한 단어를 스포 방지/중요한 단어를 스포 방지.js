function solution(message, spoiler_ranges) {
    const seenWords = new Set(); // 중요하지 않은 단어들, 이미 중요했던 단어들 저장
    
    function splitWithIndex(str) {
        const result = [];
        
        let start = 0;
        let word = ""
        for(let i = 0 ; i < str.length ; i++) {
            if(str[i] !== " ") {
                word += str[i];
            } else {
                result.push([word, start, i - 1]); // 단어, start, end
                start = i + 1;
                word = "";
            }
        }
        result.push([word, start, str.length - 1]);
        return result;
    }
    
    const messages = splitWithIndex(message);
    
    for(const [word, ws, we] of messages) {
        const isSpoiler = spoiler_ranges.some(([s, e]) => ws <= e && we >= s);
        if(!isSpoiler) seenWords.add(word); // 스포일러 범위에 포함되지 않은 단어는 중요하지 않음
    }
    
    let answer = 0;
    let idx = 0;
    for(const [s, e] of spoiler_ranges) {
        while(idx < messages.length && messages[idx][2] < s) {
              idx++;
          }
        while(idx < messages.length &&
              messages[idx][1] <= e &&
              messages[idx][2] >= s) {
            // 스포 방지에 포함되는 경우
            if(!seenWords.has(messages[idx][0])) {
                answer++;
            }
            seenWords.add(messages[idx][0]);
            if(messages[idx][2] <= e) {
                idx++;
            } else {
                break;
            }
        }
    }
    
    return answer;
}