function solution(t, p) {
    let answer = 0;
    const plen = p.length;
    const len = t.length - p.length;
    const tnum = BigInt(t);
    const pnum = BigInt(p);
    
    for(let i = 0 ; i < len + 1 ; i++) {
        let num = tnum / (10n ** BigInt(len - i)) % (10n ** BigInt(plen));
        if(num <= pnum) answer++;
    }
    return answer;
}