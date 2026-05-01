function solution(signals) {
    const cycles = signals.map(([G, Y, R]) => ({G, Y, R, T: G + Y + R}));
    console.log(cycles);
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => a / gcd(a, b) * b;
    const limit = cycles.reduce((acc, { T }) => lcm(acc, T), 1); // 신호등 주기들의 최소공배수
    
    const isYellow = (t, {G, Y, T}) => {
        const phase = t % T === 0 ? T : t % T;
        return phase >= G + 1 && phase <= G + Y;
    }
    
    for(let t = 1; t <= limit; t++) {
        if(cycles.every(c => isYellow(t, c))) {
            return t;
        }
    }
    
    return -1;
}