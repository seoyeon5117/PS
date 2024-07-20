const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null; // 집의 개수
	let M = null; // 장마 기간
	let height = null; // 마을의 땅 높이
	let rainInfo = []; // 장마가 내린 위치에 대한 정보
	let count = 0;
	
	for await (const line of rl) {
		if(N === null && M === null){
			[N, M] = line.split(" ").map(Number);
		}else if(height === null){
			height = line.split(" ").map(Number);
		}else{
			rainInfo.push(line);
			count++;
		}
		
		if(count === M){
			rl.close();
		}
	}
	console.log(solution(height, rainInfo, M));
	process.exit();
})();

function solution(height, rainInfo, m){
	let house = [];
	for(let i = 0 ; i < m ; i++) {
		let [s, e] = rainInfo[i].split(" ").map(Number);
		for(let j = s ; j <= e ; j++){
			height[j-1]++;
			if(!house.includes(j)) {
					 	house.push(j);
			}
		}
		
		if((i+1)%3 === 0) {
			house.forEach((element) => height[element-1]--)
			house = [];
		}
	}
	return height.join(" ");
}
