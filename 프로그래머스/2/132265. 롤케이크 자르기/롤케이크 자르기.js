function solution(topping) {
    let result = 0;
    const leftMap = new Map();
    const rightMap = new Map();
    
    for(const top of topping) {
        rightMap.set(top, (rightMap.get(top) || 0) + 1);
    }
    for(const top of topping) {
        leftMap.set(top, (leftMap.get(top) || 0) + 1);
        rightMap.set(top, rightMap.get(top) - 1);
        if(rightMap.get(top) === 0) {
            rightMap.delete(top);
        }
        if(leftMap.size === rightMap.size) {
            result++;
        }
    }
    return result;
}