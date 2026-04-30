function solution(schedules, timelogs, startday) {
    const person = schedules.length; // 직원 수
    let answer = person;
    const sat = (13 - startday) % 7;
    const sun = 7 - startday;
    
    for(let i = 0 ; i < person ; i++) {
        let schedule = schedules[i] + 10;
        
        let hour = Math.floor(schedule / 100);
        let min = schedule % 100;
        if(min >= 60) {
            min -= 60;
            hour++;
        }
        
        for(let j = 0 ; j < 7 ; j++) {
            if(j === sat || j === sun) continue;
            const h = Math.floor(timelogs[i][j] / 100);
            const m = timelogs[i][j] % 100;
            
            // 지각
            if(hour < h || hour === h && min < m) {
                answer--;
                break;
            };
        }
        
    }
    return answer;
}