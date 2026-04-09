function solution(survey, choices) {
    let answer = '';
    const arr = new Array(4).fill(0);
    
    for(let i = 0 ; i < survey.length ; i++) {
        const char = survey[i].split(""); // ['A', 'N']
        
        if(char[0] === 'R') {
            arr[0] += (choices[i] - 4);
        } else if(char[0] === 'T') {
            arr[0] -= (choices[i] - 4);
        } else if(char[0] === 'C') {
            arr[1] += (choices[i] - 4);
        } else if(char[0] === 'F') {
            arr[1] -= (choices[i] - 4);
        } else if(char[0] === 'J') {
            arr[2] += (choices[i] - 4);
        } else if(char[0] === 'M') {
            arr[2] -= (choices[i] - 4);
        } else if(char[0] === 'A') {
            arr[3] += (choices[i] - 4);
        } else if(char[0] === 'N') {
            arr[3] -= (choices[i] - 4);
        }
    }
    
    if(arr[0] > 0) {
        answer += "T";
    } else {
        answer += "R";
    }
    
    if(arr[1] > 0) {
        answer += "F";
    } else {
        answer += "C";
    }
    
    if(arr[2] > 0) {
        answer += "M";
    } else {
        answer += "J";
    }
    
    if(arr[3] > 0) {
        answer += "N";
    } else {
        answer += "A";
    }
    
    return answer;
}