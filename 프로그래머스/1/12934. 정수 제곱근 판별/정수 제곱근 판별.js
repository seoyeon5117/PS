function solution(n) {
    const root = Math.sqrt(n);
    
    if(root % 1 === 0) return (root + 1) ** 2;
    return -1;
}