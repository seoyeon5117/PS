function solution(plans) {
    const answer = [];
    const len = plans.length;
    const left = [];
    let idx = 0;
    
    const fplans = [];
    
    for(let i = 0 ; i < len ; i++) {
        const [hour, min] = plans[i][1].split(":").map(Number);
        fplans.push([plans[i][0], hour * 60 + min, Number(plans[i][2])]);
    }
    
    fplans.sort((a, b) => a[1] - b[1]);
    
    for(let i = 0 ; i < len - 1 ; i++) {
        const start = fplans[i][1];
        const time = fplans[i][2];
        if(start + time < fplans[i+1][1]) {
            answer.push(fplans[i][0]);
            let cur = start + time;
            while(idx > 0) {
                if(cur + left[idx-1][1] < fplans[i+1][1]) {
                    answer.push(left[idx-1][0]);
                    cur += left[idx-1][1];
                    left.pop();
                    idx--;
                } else if(cur + left[idx-1][1] === fplans[i+1][1]) {
                    answer.push(left[idx-1][0]);
                    left.pop();
                    idx--;
                    break;
                } else {
                    left[idx-1][1] = cur + left[idx-1][1] - fplans[i+1][1];
                    break;
                }
            }
        } else if(start + time === fplans[i+1][1]) {
            answer.push(fplans[i][0]);
        } else {
            left.push([fplans[i][0], start + time - fplans[i+1][1]]);
            idx++;
        }
    }
    
    answer.push(fplans[len-1][0]);
    
    while(idx > 0) {
        answer.push(left[idx-1][0]);
        idx--;
        left.pop();
    }
    
    return answer;
}