const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .split("\n");
/*
    우승: 상위 4명 점수가 가장 낮은 팀
        동점이면 다섯 번째 주자가 가장 빨리 들어온 팀
        6명 이상 참가하지 못한 팀 등수 제외!!!!!!!
        6~10000명
*/
const t = parseInt(input[0]);
let winners = "";

let testcase = 1;
while(testcase <= t) {
    let members = parseInt(input[testcase*2-1]); // 참가자 수
    let rankings = input[testcase * 2].split(" ").map(Number); // 팀 번호 (등수 순)
    let teamMemberCount = {};
    for (let i = 0; i < members; i++) {
        let team = rankings[i];
        if (!teamMemberCount[team]) {
            teamMemberCount[team] = [];
        }
        teamMemberCount[team]++;
    }

    // 6명 이상인 팀 구하기
    let validTeams = {};
    for (let team in teamMemberCount) { // 팀별 등수
        if (teamMemberCount[team] >= 6) {
            validTeams[team] = [];
        }
    }

    const validTeamNumber = Object.keys(validTeams).map(Number);


    // 점수 부여
    let score = 1;
    for (let i = 0; i < members ; i++) {
        if (validTeamNumber.includes(rankings[i])) {
            validTeams[rankings[i]].push(score);
            score++;
        }
    }

    let minScore = Infinity;
    let winner = null;

    for(let team in validTeams) {
        const teamSum = validTeams[team].slice(0, 4).reduce((a, b) => a + b, 0) // 4명 합계
        if(teamSum < minScore) {
            minScore = teamSum;
            winner = team;
        } else if(teamSum === minScore) {
            if(validTeams[winner][4] > validTeams[team][4])
                winner = team;
        }
    }
    winners += winner + "\n";
    testcase++;
}

console.log(winners);