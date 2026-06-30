function solution(a, b, c, d) {
    let answer = 0;
    const nums = [a, b, c, d];
    const map = new Map();
    for(let i = 0 ; i < 4 ; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    
    const sorted = [...map].sort((a, b) => b[1] - a[1]);
    
    if(map.size === 1) return 1111 * sorted[0][0];
    else if(map.size === 2) {
        const p = sorted[0][0], q = sorted[1][0];
        if(sorted[0][1] === 3) return (10 * p + q) ** 2;
        else return (p + q) * Math.abs(p - q);
    }
    else if(map.size === 3) {
        const q = sorted[1][0], r = sorted[2][0];
        return q * r;
    }
    else if(map.size === 4) return [...map].sort((a, b) => a[0] - b[0])[0][0];
}