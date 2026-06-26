function solution(n, times) {
    const max = Math.max(...times);
    const len = times.length;
    let low = 0;
    let high = Math.ceil(n * max / len);
    let mid = 0;
    while(low <= high) {
        mid = Math.floor((low + high) / 2);
        let per = 0; // 사람 수
        times.forEach(time => per += Math.floor(mid / time));
        if(per >= n) high = mid - 1;
        else low = mid + 1;
    }
    return low;
}