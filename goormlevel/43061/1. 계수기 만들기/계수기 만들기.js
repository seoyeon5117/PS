// Run by Node.js

const readline = require("readline");


(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null; // 누른 횟수
	let A = []; // 숫자판 최대 값
	let B = []; // 숫자판 초기 값
	let K = null; // 누른 횟수
	
	for await (const line of rl) {
		if(N === null){
			N = parseInt(line);
		} else if(A.length === 0){
			A = line.split(" ").map(Number);
		} else if(B.length === 0){
			B = line.split(" ").map(Number);
		} else{
			K = parseInt(line);
			rl.close();
		}
	}
	console.log(solution(N, A, B, K));
	process.exit();
})();

function solution(N, A, B, K){
	let share = K; // 몫
	let remain = 0;
	for(let i = N-1 ; i >= 0 ; i--){
		remain = (B[i] + share) % (A[i] + 1);
		share = Math.floor((B[i] + share) / (A[i] + 1));
		B[i] = remain;
	}
	return B.join("");
}