function solution(arr, query) {
    let len = query.length;
    let front = 0;
    let rear = arr.length;
    
    for(let i = 0 ; i < len ; i++) {
        if(i % 2 === 0) {
            rear = Math.min(rear + front, query[i] + front);
        } else {
            front += query[i];
        }
    }
    
    return arr.slice(front, rear + 1);
}