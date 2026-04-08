function solution(nums) {
    let n = nums.length;
    const p = n / 2; // 가져갈 수 있는 폰켓몬 수
    const cnts = new Array(200000).fill(0);
    
    for(let i = 0 ; i < n ; i++) {
        cnts[nums[i]] += 1;
    }
    
    let kinds = 0; // 폰켓몬 종류 세기
    for(const c of cnts) {
        if(c !== 0) kinds++;
    }
    
    if(kinds > p) {
        return p;
    } else {
        return kinds;
    }
}